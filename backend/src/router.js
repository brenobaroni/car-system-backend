const express = require('express');
const router = express();
const userControllers = require('./controllers/userControllers');

router.get('/users', (req, res) => userControllers.getAll(req, res));

module.exports = router;