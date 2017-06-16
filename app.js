const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.status(200);

    if(!req.accepts('text')) {
        res.write('name; email\n');
        res.write('Paulo Cesar; pcfmello@gmail.com');
        res.end();
    } else {
        res.json({name: 'Paulo Cesar Ferreira de Mello', email: 'pcfmello@gmail.com'});
    }
});

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Customer Base API listening at http://${host}:${port}`);
});
