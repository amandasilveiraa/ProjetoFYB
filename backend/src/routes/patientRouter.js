const { Router } = require('express');

const router = Router();

const { 
    listMonth,
    listWeek,
    addPatient,
    updatePatient,
    deletePatient,
} = require('../controllers/patientController')

router.get('/patient', listMonth);
router.get('/week', listWeek);
router.post('/create', addPatient);
router.put('/patient/:id', updatePatient);
router.delete('/patient/:id', deletePatient);

module.exports = router;
