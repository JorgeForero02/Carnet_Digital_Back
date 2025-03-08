// routes/asesoriaRoutes.js
import express from 'express';
import {
    getAllAsesorias,
    getAsesoriaById,
    createAsesoria,
    updateAsesoria,
    deleteAsesoria,
    getAsesoriasByDocente,
    getAsesoriasByMateria
} from '../controllers/asesoriaController.js';
import { verifyToken, isDocente } from '../middlewares/auth.js';

const router = express.Router();

// Rutas básicas para asesorías
router.get('/', verifyToken, getAllAsesorias);
router.get('/:id', verifyToken, getAsesoriaById);
router.post('/', verifyToken, isDocente, createAsesoria);
router.put('/:id', verifyToken, isDocente, updateAsesoria);
router.delete('/:id', verifyToken, isDocente, deleteAsesoria);

// Rutas adicionales
router.get('/docente/:docenteId', verifyToken, getAsesoriasByDocente);
router.get('/materia/:materiaId', verifyToken, getAsesoriasByMateria);

export default router;