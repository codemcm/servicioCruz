const dbCon = require("../config/config");

function raffleAdd(req, res, next) {
  const query =
    "SELECT * FROM PUBLIC.raffleAdd(${description},${start_data},${raffle_date},${created_by})";
  dbCon
    .one(query, req.body)
    .then(function (data) {
      res.json({
        status: "successfull",
        data: data,
        message: "Rifa registrada con exito",
      });
    })
    .catch(function (error) {
      console.log(error);
      res.json({
        status: error,
        data: "no data",
        message: "error",
      });
    });
}

function raffleGetAll(req, res, next) {
  const query = "SELECT * FROM PUBLIC.raffle";
  dbCon.any(query, req).then(function (data) {
    res.json({
      status: "successfull",
      data: data,
      message: "Registros de rifas recuperados con exito",
    });
  });
}

module.exports = {
  add: raffleAdd,
  getAll: raffleGetAll,
};
