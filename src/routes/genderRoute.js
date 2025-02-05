const express = require('express');
const GenderController = require('../controllers/genderController');

const router = express.Router();

router.get('/', GenderController.getAll);
router.get('/:idgenero', GenderController.getById);
router.post('/', GenderController.create);
router.delete('/:idgenero', GenderController.delete);

module.exports = router;
