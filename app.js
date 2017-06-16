const express = require('express');
const app = express();
const methodOverride = require('method-override');

// Method Override configuration
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

// Middleware configuration
app.use((req, res, next) => {
    if(request.url === '/favicon.ico') {
        res.writeHead(200, {'Content-type': 'image/x-icon'});
        response.end('');
    } else {
        next();
    }
});

// Route '/'
app.get('/', (req, res) => {
    res.status(200);

    if(!req.accepts('text')) {
        res.write('name; email\n');
        res.write('Paulo Cesar; pcfmello@gmail.com');
        res.end();
    } else {
        res.json({name: 'Paulo Cesar Ferreira de Mello', email: 'pcfmello@gmail.com'});
    }
});

// Server configuration
let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Customer Base API listening at http://${host}:${port}`);
});
