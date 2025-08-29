// import { Request, Response, NextFunction } from "express";
// import * as claseSocioService from "../services/claseSocio.service";
// import { CreateClaseSocioRequest, UpdateClaseSocioRequest } from "../types/claseSocio";

// // Listar todas las clases de socios
// // export async function getAllClasesSocio(req: Request, res: Response, next: NextFunction) {
// //   try {
// //     const clases = await claseSocioService.getAllClasesSocio();
// //     res.json({ clases, total: clases.length });
// //   } catch (error) {
// //     next(error);
// //   }
// // }

// // Obtener claseSocio por ID
// export async function getClaseSocioById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
//   try {
//     const { id } = req.params;
//     const clase = await claseSocioService.getClaseSocioById(Number(id));
//     res.json({ clase, message: "ClaseSocio encontrada correctamente" });
//   } catch (error) {
//     next(error);
//   }
// }

// // Crear claseSocio
// export async function createClaseSocio(req: Request<{}, {}, CreateClaseSocioRequest>, res: Response, next: NextFunction) {
//   try {
//     const clase = await claseSocioService.createClaseSocio(req.body);
//     res.status(201).json({ clase, message: "ClaseSocio creada correctamente" });
//   } catch (error) {
//     next(error);
//   }
// }

// // Actualizar claseSocio
// export async function updateClaseSocio(req: Request<{ id: string }, {}, UpdateClaseSocioRequest>, res: Response, next: NextFunction) {
//   try {
//     const { id } = req.params;
//     const clase = await claseSocioService.updateClaseSocio(Number(id), req.body);
//     res.json({ clase, message: "ClaseSocio actualizada correctamente" });
//   } catch (error) {
//     next(error);
//   }
// }

// // Eliminar claseSocio
// export async function deleteClaseSocio(req: Request<{ id: string }>, res: Response, next: NextFunction) {
//   try {
//     const { id } = req.params;
//     await claseSocioService.deleteClaseSocio(Number(id));
//     res.json({ message: "ClaseSocio eliminada correctamente" });
//   } catch (error) {
//     next(error);
//   }
// }
