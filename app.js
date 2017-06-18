let express = require('express');
let methodOverride = require('method-override');
let bodyParser = require('body-parser');
let app = express();

// SERVER CONFIG ===
// Method Override configuration
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
// Body Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
// Application Middleware configuration - Don't serve favicon.ico file
app.use((req, res, next) => {
    if(req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-type': 'image/x-icon'});
        res.end('');
    } else {
        next();
    }
});

// CORS Middleware configuration
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' => Opened for all request origins
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
    next();
});*/

// ROUTES CONFIG ===
// Main route
app.use('/', require('./routes'));

// ERRORS HANDLING CONFIG ===
// Error 404
app.use((req, res, next) => {
    let err = new Error('Not found');
    err.status = 404;
    next(err);
});
// Error 500
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500).json({ err: err.message });
});

// SERVER CONFIG
module.exports = app;
