var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//STUDENT
const client = require("../modules/clientM");
router.post("v1/clients/"client.cli)

module.exports = router;
