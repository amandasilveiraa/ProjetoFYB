const { Router } = require('express');

const router = Router();

const { 
    listPatient,
    addPatiente,
    updatePatient,
    deletePatient
} = require('../controllers/patienteController')

router.get('/patient', listPatient);
router.post('/patient/create', addPatiente);
router.put('/patient/:id', updatePatient);
router.delete('/patient/:id', deletePatient);

module.exports = router;
