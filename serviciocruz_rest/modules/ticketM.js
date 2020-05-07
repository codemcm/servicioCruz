const dbCon = require("../config/config");

function ticketAdd(req, res, next) {
    const query = "SELECT * FROM PUBLIC.ticketAdd(${raffle_id},${client_id})";
    dbCon.one(query, req.body)
        .then(function (data) {
            res.json({
                status: "successfull",
                data: data,
                message: "Boleto registrado con exito"
            })
        })
        .catch(function (error) {
            console.log(error);
            res.json({
                status: error,
                data: "no data",
                message: "error"
            })
        })
}

function ticketGetAll(req, res, next) {
    const query = "SELECT * FROM PUBLIC.ticket";
    dbCon.any(query, req)
        .then(function (data) {
            res.json({
                status: "successfull",
                data: data,
                message: "Registros de boletos recuperados con exito"
            })
        })
}
function respondiend(req, res, next) {
    res.send('respond with a resource');
}
module.exports = {
    add: ticketAdd,
    getAll: ticketGetAll,
    respondiend: respondiend
} 