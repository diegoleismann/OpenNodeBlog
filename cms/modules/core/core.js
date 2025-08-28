const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const indexRouter = require('../index/index-router.js');
const usersRouter = require('../user/UserRouter.js');
const docs = require('../../docs/index.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../../../cms/files')));

var corsOptions = {
  origin: [process.env.FRONTEND_URL],
  optionsSuccessStatus: 200,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

//[]TASK add to database list of domains cors
app.use(cors(corsOptions))

app.use((req, res, next) => {
  console.log((new Date()).toISOString() + ' ' + req.method + ' ' + req.url);
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/docs', (req, res) => {
  res.json(docs);
})
app.use(function (req, res, next) {
  console.log('notfound', req.url);
  res.status(404)
  res.json({ "error": "RouteNotFound", "documentation": "/docs" });
});



module.exports = app;
