// routes/asistenciaClaseRoutes.js
import express from 'express';
import {
    getAllAsistenciasClase,
    getAsistenciaClaseById,
    getAsistenciasByEstudiante,
    getAsistenciasByMateria,
    getAsistenciasByDocente,
    createAsistenciaClase,
    updateAsistenciaClase,
    deleteAsistenciaClase
} from '../controllers/asistenciaClaseController.js';
import { verifyToken, isDocente, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Rutas para asistencias a clases
router.get('/', verifyToken, getAllAsistenciasClase);
router.get('/:id', verifyToken, getAsistenciaClaseById);
router.get('/estudiante/:estudiante_id', verifyToken, getAsistenciasByEstudiante);
router.get('/materia/:materia_id', verifyToken, getAsistenciasByMateria);
router.get('/docente/:docente_id', verifyToken, getAsistenciasByDocente);
router.post('/', verifyToken, isDocente, createAsistenciaClase);
router.put('/:id', verifyToken, isDocente, updateAsistenciaClase);
router.delete('/:id', verifyToken, isAdmin, deleteAsistenciaClase);

export default router;