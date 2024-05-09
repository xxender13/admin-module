var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var donarListRouter = require('./routes/donor-details/donars_List');
var donar_module_router = require('./routes/demo/donar-module');
// var submitformRouter = require('./routes/demo/submit-form');
var emailRouter = require('./routes/email-service/email-service.js');
var adminRouter = require('./routes/admin-details/crud_admin')
var donorRouter = require('./routes/donor-details/crud_donordetails')
var app = express();

// Allow requests from your React app's origin
app.use(cors({ origin: 'http://localhost:3000' }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/donorsList', donarListRouter);
app.use('/donar-module', donar_module_router);
app.use('/email-service', emailRouter);
// app.use('/submit-form', submitformRouter);
app.use('/admin',adminRouter);
app.use('/donor', donorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
