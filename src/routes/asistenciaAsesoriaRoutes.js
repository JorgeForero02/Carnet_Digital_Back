// routes/asistenciaAsesoriaRoutes.js
import express from 'express';
import {
    getAllAsistenciasAsesorias,
    getAsistenciaAsesoriaById,
    getAsistenciasByAsesoriaId,
    getAsistenciasByEstudianteId,
    createAsistenciaAsesoria,
    updateAsistenciaAsesoria,
    validarAsistenciaAsesoria,
    deleteAsistenciaAsesoria
} from '../controllers/asistenciaAsesoriaController.js';
import { verifyToken, isDocente, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Rutas protegidas por autenticación general
router.get('/', verifyToken, getAllAsistenciasAsesorias);
router.get('/:id', verifyToken, getAsistenciaAsesoriaById);
router.get('/asesoria/:asesoriaId', verifyToken, getAsistenciasByAsesoriaId);
router.get('/estudiante/:estudianteId', verifyToken, getAsistenciasByEstudianteId);
router.post('/', verifyToken, createAsistenciaAsesoria);
router.put('/:id', verifyToken, updateAsistenciaAsesoria);

// Rutas que requieren ser docente o administrador
router.put('/:id/validar', verifyToken, isDocente, validarAsistenciaAsesoria);
router.delete('/:id', verifyToken, isDocente, deleteAsistenciaAsesoria);

export default router;