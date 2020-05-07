var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "rest api for servicio cruz" });
});

//cliente

const cliente = require("../modules/clientM");
router.post("/v1/client/", cliente.add);
router.get("/v1/client/", cliente.respondiend);
router.get("/v1/client/all", cliente.getAll);

const prize = require("../modules/prizeM");
router.post("/v1/prize/", prize.add);
router.get("/v1/prize/all", prize.getAll);

const raffle = require("../modules/raffleM");
router.post("/v1/raffle/", raffle.add);
router.get("/v1/raffle/all", raffle.getAll);

const ticket = require("../modules/ticketM");
router.post("/v1/ticket/", ticket.add);
router.get("/v1/ticket/all", ticket.getAll);
module.exports = router;
