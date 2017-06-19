let express = require('express');
let router = express.Router();
let CustomerController = require('../controllers/CustomerController');

router.get('/', CustomerController.getAll);

router.get('/:_id', CustomerController.getById);

router.post('/', CustomerController.create);

router.put('/:_id', CustomerController.update);

router.delete('/:_id', CustomerController.remove);

module.exports = router;
