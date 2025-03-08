// routes/materiaRoutes.js
import express from 'express';
import {
    getAllMaterias,
    getMateriaById,
    createMateria,
    updateMateria,
    deleteMateria
} from '../controllers/materiaController.js';
import { verifyToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Rutas para materias
router.get('/', verifyToken, getAllMaterias);
router.get('/:id', verifyToken, getMateriaById);
router.post('/', verifyToken, isAdmin, createMateria);
router.put('/:id', verifyToken, isAdmin, updateMateria);
router.delete('/:id', verifyToken, isAdmin, deleteMateria);

export default router;