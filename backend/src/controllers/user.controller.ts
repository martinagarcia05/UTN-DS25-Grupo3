import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { CreateUserRequest, UpdateUserRequest } from '../types/user';

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({ users, total: users.length });
  } catch (error: any) {
    console.error('Error al obtener usuarios:', error);
    return res.status(500).json({ message: 'Error al obtener usuarios' });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userService.getUserById(id);
    return res.status(200).json({ user });
  } catch (error: any) {
    console.error('Error al obtener usuario:', error);
    return res
      .status(error.statusCode || 404)
      .json({ message: error.message || 'Usuario no encontrado' });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const updated = await userService.updateUser(
      parseInt(req.params.id),
      req.body,
      req.file 
    );

    res.json({
      success: true,
      message: "Usuario actualizado correctamente",
      data: updated,
    });
  } catch (error: any) {
    res.status(error.statusCode || 400).json({
      success: false,
      message: error.message || "Error al actualizar usuario",
    });
  }
}



export async function deleteUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    await userService.deleteUser(id);
    return res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error: any) {
    console.error('Error al eliminar usuario:', error);
    return res
      .status(error.statusCode || 404)
      .json({ message: error.message || 'Error al eliminar usuario' });
  }
}
