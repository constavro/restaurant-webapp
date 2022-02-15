var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
    style: 'home.css'
    });
});
router.get('/about', function(req, res, next) {
  res.render('about', { 
    style: 'about.css'
    });
});
router.get('/employee', function(req, res, next) {
  res.render('employee', { 
    style: 'employee.css'
    });
});
router.get('/login', function(req, res, next) {
  res.render('login', { 
    style: 'login.css'
    });
});
router.get('/menu', function(req, res, next) {
  res.render('menu', { 
    style: 'menu.css'
    });
});
router.get('/order', function(req, res, next) {
  res.render('order', { 
    style: 'order.css'
    });
});
router.get('/reserve', function(req, res, next) {
  res.render('reserve', { 
    style: 'reserve.css'
    });
});

module.exports = router;
