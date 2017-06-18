let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.status(201);
    res.json({name: 'Paulo Cesar Ferreira de Mello', email: 'pcfmello@gmail.com'});
});

module.exports = router;
