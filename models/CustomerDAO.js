'use strict';

function CustomerDAO(model) {
    this.model = model;
}

CustomerDAO.prototype.find = (query, callback) => {
    this.model.find(query).exec(callback);
};

CustomerDAO.prototype.findOne = (_id, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    this.model.findOne(query, callback);
};

CustomerDAO.prototype.create = (data, callback) => {
    this.model.insert(data, callback);
};

CustomerDAO.prototype.update = (_id, data, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    this.model.update(_id, data, callback);
};

CustomerDAO.prototype.remove = (_id, callback) => {
    let query = { _id: mongo.ObjectId(_id) };
    this.model.remove(query, callback);
};

module.exports = (mongoose) => {
    let Customer = mongoose.model('Customer', {
            name:       String,
            gender:     String,
            email:      String,
            occupation: String
        });
    return new CustomerDAO(Customer);
};
