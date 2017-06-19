let mongo = require('../db/mongo');

function CustomerModel() {}

CustomerModel.prototype.find = (query, callback) => {
    mongo.collection('customers').find(query, callback);
};

CustomerModel.prototype.findOne = (_id, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    mongo.collection('customers').findOne(query, callback);
};

CustomerModel.prototype.create = (data, callback) => {
    mongo.collection('customers').insert(data, callback);
};

CustomerModel.prototype.update = (_id, data, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    mongo.collection('customers').update(_id, data, callback);
};

CustomerModel.prototype.remove = (_id, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    mongo.collection('customers').remove(query, callback);
};

module.exports = new CustomerModel();
