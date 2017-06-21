let mongoose = require('mongoose');
let debug = require('debug')('nodejs_customer_base_api:db');
let config = require('config');

function _connection() {
    let username = config.get('mongo.username'),
        password = config.get('mongo.password'),
        server   = config.get('mongo.server'),
        port     = config.get('mongo.port'),
        database = config.get('mongo.database'),
        auth     = username ? `${username}:${password}@` : '';
    return `mongodb://${auth}${server}:${port}/${database}`;
}
mongoose.connect(_connection());
let db = mongoose.connection;
db.on('error', (err) => debug(err));
db.once('open', (callback) => debug('connected to mongodb'));

module.exports = mongoose;