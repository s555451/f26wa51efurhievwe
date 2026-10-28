
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET mydata page. */
router.get('/mydata', function(req, res) {
  res.send('Mydata route works!');
});

module.exports = router;

