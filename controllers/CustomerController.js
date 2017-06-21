let debug = require('debug')('nodejs_customer_base_api:controller');

function CustomerController(CustomerDAO) {
    this.model = CustomerDAO;
}

CustomerController.prototype.getAll = (req, res, next) => {
    this.model.find({}, (err, data) => {
        if(err)
            return next(err);
        res.json(data);
        res.status(200);
    });
};

CustomerController.prototype.getById = (req, res, next) => {
    let _id = req.params['_id'];
    this.model.findOne(_id, (err, data) => {
        if(err)
            return next(err);
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
    this.model.create(body, (err, data) => {
        if(err)
            return next(err);
        res.json(data);
        res.status(201);
    });
};

CustomerController.prototype.update = (req, res, next) => {
    let _id = req.params['_id'];
    let body = req.params['body'];
    this.model.update(_id, body, (err, data) => {
        if(err)
            return next(err);
        res.json(data);
        res.status(200);
    });
};

CustomerController.prototype.remove = (req, res, next) => {
    let _id = req.params['_id'];
    this.model.remove(_id, (err, data) => {
        if(err)
            return next(err);
        res.json(data);
        res.status(200);
    });
};

module.exports = (CustomerDAO) => {
    return new CustomerController(CustomerDAO);
};
