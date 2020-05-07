/* 
    @author Martin Cruz 
    created_date: 2020-05-02 
 
*/
const dbCon = require("../config/config");

function clientAdd(req, res, next) {
  const query =
    "SELECT * FROM PUBLIC.clientAdd(${name}, ${last_name}, ${cell}, ${observations},${user})";
  dbCon
    .one(query, req.body)
    .then(function (data) {
      res.json({
        status: "successfull",
        data: data,
        message: "Cliente registrado con exito",
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

function clientGetAll(req, res, next) {
  const query = "SELECT * FROM PUBLIC.client";
  dbCon.any(query, req).then(function (data) {
    res.json({
      status: "successfull",
      data: data,
      message: "Clientes recuperados con exito",
    });
  });
}
function respondiend(req, res, next) {
  res.send("respond with a resource");
}
module.exports = {
  add: clientAdd,
  getAll: clientGetAll,
  respondiend: respondiend,
};
