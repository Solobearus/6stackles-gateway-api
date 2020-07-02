var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

require('dotenv').config();

var corsOptions = {
    origin: 'http://localhost:3004',
    optionsSuccessStatus: 200
}

var app = express();

// app.use(cors(corsOptions))
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;
