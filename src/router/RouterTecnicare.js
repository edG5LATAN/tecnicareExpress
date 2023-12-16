import Router from "express";
import { getUsuario ,deleteTecnicare, getTecnicare, getUnidadTecnicare, postTecnicare, putTecnicare, getAllUsuario } from "../controller/ControllerTecnicare.js";


const router =Router()

router.get('/telefonos',getTecnicare)
router.get('/telefonos/:id',getUnidadTecnicare)

router.post('/telefonos',postTecnicare)

router.delete('/telefonos/:id',deleteTecnicare)

router.put('/telefonos/:id',putTecnicare)

router.get('/usuario/:id',getUsuario)

router.get('/usuario',getAllUsuario)

export default router