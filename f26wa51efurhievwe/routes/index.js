
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/mydata', function(req, res) {
  res.json({
    message: 'My data route is working!',
    name: 'Obora'
  });
});

module.exports = router;
