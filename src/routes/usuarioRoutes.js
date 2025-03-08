// routes/usuarioRoutes.js
import express from 'express';
import {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    loginUsuario
} from '../controllers/usuarioController.js';
import { verifyToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Ruta pública para login
router.post('/login', loginUsuario);

// Ruta pública para crear usuario (registro)
router.post('/', createUsuario);

// Rutas protegidas
router.get('/', verifyToken, isAdmin, getAllUsuarios);
router.get('/:id', verifyToken, getUsuarioById);
router.put('/:id', verifyToken, updateUsuario);
router.delete('/:id', verifyToken, isAdmin, deleteUsuario);

export default router;