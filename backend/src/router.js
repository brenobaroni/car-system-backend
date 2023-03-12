const express = require('express');
const router = express();
const userControllers = require('./controllers/userControllers');

router.get('/api/users', userControllers.getAll);
router.post('/api/users', userControllers.create);

module.exports = router;