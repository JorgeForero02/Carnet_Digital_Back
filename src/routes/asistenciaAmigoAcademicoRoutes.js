// routes/asistenciaAmigoAcademicoRoutes.js
import express from 'express';
import {
    getAllAsistencias,
    getAsistenciaById,
    getAsistenciasByAmigoAcademico,
    getAsistenciasByEstudiante,
    createAsistencia,
    updateAsistencia,
    validarAsistencia,
    deleteAsistencia
} from '../controllers/asistenciaAmigoAcademicoController.js';
import { verifyToken, isDocente, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Rutas para asistencias de amigos académicos
router.get('/', verifyToken, getAllAsistencias);
router.get('/:id', verifyToken, getAsistenciaById);
router.get('/amigo-academico/:amigoAcademicoId', verifyToken, getAsistenciasByAmigoAcademico);
router.get('/estudiante/:estudianteId', verifyToken, getAsistenciasByEstudiante);
router.post('/', verifyToken, createAsistencia);
router.put('/:id', verifyToken, updateAsistencia);
router.patch('/:id/validar', verifyToken, isDocente, validarAsistencia);
router.delete('/:id', verifyToken, isAdmin, deleteAsistencia);

export default router;