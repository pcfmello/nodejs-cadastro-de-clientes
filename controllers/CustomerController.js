let CustomerModel = require('../models/CustomerModel');

function CustomerController() {}

CustomerController.prototype.getAll = (req, res, next) => {
    res.json({name: 'Get all customers'});
    res.status(200);
};

CustomerController.prototype.getById = (req, res, next) => {
    res.json({name: `Get customer with ID: ${req.param('_id')}`});
    res.status(200);
};

CustomerController.prototype.save = (req, res, next) => {
    res.json({name: 'Save customer'});
    res.status(201);
};

CustomerController.prototype.update = (req, res, next) => {
    res.json({name: `Update customer with ID: ${req.param('_id')}`});
    res.status(200);
};

CustomerController.prototype.remove = (req, res, next) => {
    res.json({name: `Delete customer with ID: ${req.param('_id')}`});
    res.status(200);
};

module.exports = new CustomerController();
