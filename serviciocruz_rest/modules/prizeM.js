const dbCon = require("../config/config");

function prizeAdd(req, res, next) {
    const query = "SELECT * FROM PUBLIC.prizeAdd(${product},${raffle_id},${created_by})";
    dbCon.one(query, req.body)
        .then(function (data) {
            res.json({
                status: "successfull",
                data: data,
                message: "Premio registrado con exito"
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

function prizeGetAll(req, res, next) {
    const query = "SELECT * FROM PUBLIC.prize";
    dbCon.any(query, req)
        .then(function (data) {
            res.json({
                status: "successfull",
                data: data,
                message: "Registros de premios recuperados con exito"
            })
        })
}
function respondiend(req, res, next) {
    res.send('respond with a resource');
}
module.exports = {
    add: prizeAdd,
    getAll: prizeGetAll,
    respondiend: respondiend
} 