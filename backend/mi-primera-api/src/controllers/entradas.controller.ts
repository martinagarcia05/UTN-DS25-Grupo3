import { CreateEntradaRequest, UpdateEntradaRequest, EntradaListResponse, EntradaResponse } from "../types/entradas";
import { Request, Response, NextFunction} from 'express';
import * as entradaService from '../services/entradas.service';

export async function getAllEntradas( req: Request, res: Response<EntradaListResponse>, next: NextFunction) {
  try {
    const entradas = await entradaService.getAllEntradas();
    res.json({
      entradas,
      total: entradas.length
    });
  } catch (error){
    next(error);
  }
}

export async function getEntradaById(req: Request, res: Response<EntradaResponse>, next: NextFunction) {
  try{
    const { id } = req.params;
    if (!id) {
      const error = new Error("ID parameter is missing");
      (error as any).statusCode = 400;
      throw error;
    }
    const entrada = await entradaService.getEntradaById (parseInt(id));
    res.json({
      entrada,
      message: "Entrada retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
}


export async function createEntrada(
  req: Request<{}, EntradaResponse, CreateEntradaRequest>,
  res: Response<EntradaResponse>,
  next: NextFunction
) {
  try {
    const newEntrada = await entradaService.createEntrada(req.body);
    res.status(201).json({
        entrada: newEntrada,
        message: 'Entrada created successfully'
      });
    } catch (error) {
      next(error);
    }
  }

export async function updateEntrada(
  req: Request<{ id: string }, EntradaResponse, UpdateEntradaRequest>,
  res: Response<EntradaResponse>,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const updatedEntrada = await entradaService.getEntradaById(parseInt(id));

    res.json({
      entrada: updatedEntrada,
      message: 'Entrada updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

