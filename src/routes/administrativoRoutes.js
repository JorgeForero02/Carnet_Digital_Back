// routes/administrativoRoutes.js
import express from 'express';
import {
    getAllAdministrativos,
    getAdministrativoById,
    createAdministrativo,
    updateAdministrativo,
    deleteAdministrativo
} from '../controllers/administrativoController.js';
import { verifyToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Rutas para administrativos
router.get('/', verifyToken, getAllAdministrativos);
router.get('/:id', verifyToken, getAdministrativoById);
router.post('/', verifyToken, isAdmin, createAdministrativo);
router.put('/:id', verifyToken, updateAdministrativo);
router.delete('/:id', verifyToken, isAdmin, deleteAdministrativo);

export default router;