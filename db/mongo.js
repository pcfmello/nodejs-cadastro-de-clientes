let mongo = require('mongojs');
let config = require('config');
let debug = require('debug')('nodejs_customer_base_api:db');

'use strict';
function _connection() {
    let username = config.get('mongo.username'),
        password = config.get('mongo.password'),
        server   = config.get('mongo.server'),
        port     = config.get('mongo.port'),
        database = config.get('mongo.database'),
        auth     = username ? `${username}:${password}@` : '';
    return `mongodb://${auth}${server}:${port}/${database}`;
}
let db = mongo(_connection());
db.on('error', (err) => debug(err) );

module.exports = db;