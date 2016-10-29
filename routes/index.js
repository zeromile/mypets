var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Pet Store - Home' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'My Pet Store - Products' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'My Pet Store - Contact' });
});

//products routes
router.get('/product1', function(req, res, next) {
  console.log("product1");
  res.json({
    productname: 'Product Name1',
    image:'product1.jpg',
    info: 'This is some info1'
  });
});

router.get('/product2', function(req, res, next) {
  res.json({
    productname: 'Product Name2',
    image:'product2.jpg',
    info: 'This is some info2'
  });
});

router.get('/product3', function(req, res, next) {
  res.json({
    productname: 'Product Name3',
    image:'product3.jpg',
    info: 'This is some info3'
  });
});

router.get('/product4', function(req, res, next) {
  res.json({
    productname: 'Product Name4',
    image:'product4.jpg',
    info: 'This is some info4'
  });
});

router.get('/product5', function(req, res, next) {
  res.json({
    productname: 'Product Name5',
    image:'product5.jpg',
    info: 'This is some info5'
  });
});

router.get('/product6', function(req, res, next) {
  res.json({
    productname: 'Product Name6',
    image:'product6.jpg',
    info: 'This is some info6'
  });
});

module.exports = router;
