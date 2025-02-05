const express = require('express');
const StudentController = require('../controllers/studentController');

const router = express.Router();

router.get('/', StudentController.getAll);
router.get('/:ci_est', StudentController.getByCi);
router.post('/', StudentController.create);
router.put('/:ci_est', StudentController.update);
router.delete('/:ci_est', StudentController.delete);

module.exports = router;
