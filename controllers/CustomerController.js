let debug = require('debug')('nodejs_customer_base_api:controller');
let CustomerModel = require('../models/CustomerModel');

function CustomerController() {}

CustomerController.prototype.getAll = (req, res, next) => {
    CustomerModel.find({}, (err, data) => {
        if(err) return next(err);
        res.json(data);
        res.status(200);
    });
};

CustomerController.prototype.getById = (req, res, next) => {
    let _id = req.params['_id'];
    CustomerModel.findOne(_id, (err, data) => {
        if(err) return next(err);
        if(!data) {
            let err = new Error('Not found');
            err.status = 404;
            return next(err);
        }
        res.json(data);
        res.status(200);
    });
};

CustomerController.prototype.create = (req, res, next) => {
    let body = req.body;
    CustomerModel.create(body, (err, data) => {
        if(err) return next(err);
        res.json(data);
        res.status(201);
    });
};

CustomerController.prototype.update = (req, res, next) => {
    let _id = req.params['_id'];
    let body = req.params['body'];
    CustomerModel.update(_id, body, (err, data) => {
        if(err) return next(err);
        res.json(data);
        res.status(200);
    });
};

CustomerController.prototype.remove = (req, res, next) => {
    let _id = req.params['_id'];
    CustomerModel.remove(_id, (err, data) => {
        if(err) return next(err);
        res.json(data);
        res.status(200);
    });
};

module.exports = new CustomerController();
