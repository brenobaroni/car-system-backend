const express = require('express');
const router = require('./router');
const {ErrorHandler} = require('./middlewares/errorMiddleware')

//init
const app = express();
app.use(express.json());
app.use(router);


// ERROR HANDLER
app.use(ErrorHandler)

module.exports = app;