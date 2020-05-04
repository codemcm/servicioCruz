var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//cliente


const cliente = require("../modules/clientM");
router.post("/v1/client/", cliente.add);
router.get("/v1/client/", cliente.respondiend);
router.get("/v1/client/all", cliente.getAll)
module.exports = router;
