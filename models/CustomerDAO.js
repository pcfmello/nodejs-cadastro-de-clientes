let mongoose = require('../db/mongoose');

function CustomerDAO() {}

CustomerDAO.prototype.find = (query, callback) => {
    this.find(query).exec(callback);
};

CustomerDAO.prototype.findOne = (_id, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    mongoose.collection('customers').findOne(query, callback);
};

CustomerDAO.prototype.create = (data, callback) => {
    mongoose.collection('customers').insert(data, callback);
};

CustomerDAO.prototype.update = (_id, data, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    mongoose.collection('customers').update(_id, data, callback);
};

CustomerDAO.prototype.remove = (_id, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    mongoose.collection('customers').remove(query, callback);
};

module.exports = () => {
    let Customer = mongoose.model('Customer', {
        name:       String,
        gender:     String,
        email:      String,
        occupation: String
    });
    return new CustomerDAO();
};
