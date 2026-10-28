var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/mydata', function(req, res) {
  res.json({
    name: 'Obora',
    message: 'Mydata route is working!'
  });
});

module.exports = router;