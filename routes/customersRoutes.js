let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.json({ name: 'Get all customers'});
    res.status(200);
});

router.get('/:_id', (req, res) => {
    res.json({ name: `Get customer with ID: ${req.param('_id')}`});
    res.status(200);
});

router.post('/', (req, res) => {
    res.json({ name: 'Save customer'});
    res.status(201);
});

router.put('/:_id', (req, res) => {
    res.json({ name: `Update customer with ID: ${req.param('_id')}`});
    res.status(200);
});

router.delete('/:_id', (req, res) => {
    res.json({ name: `Delete customer with ID: ${req.param('_id')}`});
    res.status(200);
});

module.exports = router;
