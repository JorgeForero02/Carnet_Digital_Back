// routes/estudianteRoutes.js
import express from 'express';
import {
    getAllEstudiantes,
    getEstudianteById,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante
} from '../controllers/estudianteController.js';
import { verifyToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Rutas para estudiantes
router.get('/', verifyToken, getAllEstudiantes);
router.get('/:id', verifyToken, getEstudianteById);
router.post('/', verifyToken, isAdmin, createEstudiante);
router.put('/:id', verifyToken, updateEstudiante);
router.delete('/:id', verifyToken, isAdmin, deleteEstudiante);

export default router;