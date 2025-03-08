// routes/amigoAcademicoRoutes.js
import express from 'express';
import {
    getAllAmigosAcademicos,
    getActiveAmigosAcademicos,
    getAmigoAcademicoById,
    getAmigoAcademicoByEstudianteId,
    getAmigoAcademicoByMateriaId,
    createAmigoAcademico,
    updateAmigoAcademico,
    toggleActivoAmigoAcademico,
    deleteAmigoAcademico
} from '../controllers/amigoAcademicoController.js';
import { verifyToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Rutas para amigos académicos
router.get('/', verifyToken, getAllAmigosAcademicos);
router.get('/active', verifyToken, getActiveAmigosAcademicos);
router.get('/:id', verifyToken, getAmigoAcademicoById);
router.get('/estudiante/:estudianteId', verifyToken, getAmigoAcademicoByEstudianteId);
router.get('/materia/:materiaId', verifyToken, getAmigoAcademicoByMateriaId);
router.post('/', verifyToken, createAmigoAcademico);
router.put('/:id', verifyToken, updateAmigoAcademico);
router.patch('/:id/toggle-activo', verifyToken, isAdmin, toggleActivoAmigoAcademico);
router.delete('/:id', verifyToken, isAdmin, deleteAmigoAcademico);

export default router;