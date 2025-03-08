// routes/docenteRoutes.js
import express from 'express';
import {
    getAllDocentes,
    getDocenteById,
    createDocente,
    updateDocente,
    deleteDocente
} from '../controllers/docenteController.js';
import { verifyToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Rutas para docentes
router.get('/', verifyToken, getAllDocentes);
router.get('/:id', verifyToken, getDocenteById);
router.post('/', verifyToken, isAdmin, createDocente);
router.put('/:id', verifyToken, updateDocente);
router.delete('/:id', verifyToken, isAdmin, deleteDocente);

export default router;