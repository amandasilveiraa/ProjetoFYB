const { Router } = require('express');

const router = Router();

const { 
    listPatient,
    addPatient,
    updatePatient,
    deletePatient
} = require('../controllers/patientController')

router.get('/patient', listPatient);
router.post('/create', addPatient);
router.put('/patient/:id', updatePatient);
router.delete('/patient/:id', deletePatient);

module.exports = router;
