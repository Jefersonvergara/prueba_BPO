const { Router } = require('express');
const router = Router();

const {getUsers,getEmpleado,getDepartamento,createEmpleado,createDepartamento,getEmpleadoById,getDepartamentoById,deleteEmpleado,deleteDepartamento,updateDepartamento,updateEmpleado} = require('../controllers/index.controllers')

router.get('/api/users', getUsers);

router.get('/api/empleado', getEmpleado);
router.get('/api/empleado/:id', getEmpleadoById);
router.delete('/api/empleado/delete/:id', deleteEmpleado);
router.put('/api/empleado/update/:id', updateEmpleado);
router.post('/api/empleado/create', createEmpleado);

router.get('/api/departamento', getDepartamento);
router.post('/api/departamento/create', createDepartamento);
router.get('/api/departamento/:id', getDepartamentoById);
router.delete('/api/departamento/delete/:id', deleteDepartamento);
router.put('/api/departamento/update/:id', updateDepartamento);

module.exports = router;