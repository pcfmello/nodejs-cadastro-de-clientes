let express = require('express');
let router = express.Router();
let mongoose = require('../db/mongoose');

let CustomerDAO = require('../models/CustomerDAO')(mongoose);
let CustomerController = require('../controllers/CustomerController')(CustomerDAO);

router.get('/', CustomerController.getAll.bind(CustomerController));

router.get('/:_id', CustomerController.getById.bind(CustomerController));

router.post('/', CustomerController.create.bind(CustomerController));

router.put('/:_id', CustomerController.update.bind(CustomerController));

router.delete('/:_id', CustomerController.remove.bind(CustomerController));

module.exports = router;
