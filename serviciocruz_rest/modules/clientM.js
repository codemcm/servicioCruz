/*
    @author Martin Cruz
    created_date: 2020-05-02

*/
import { CLIENT } from '../constants/functions_postgresql';
const dbCon = require("../config/config");

function clientAdd(req, res, next) {
    Console.log(CLIENT);
    const query = "SELECT * FROM PUBLIC.client_add(${occupation_id}, ${first_name}, ${last_name}," +
        "${surname}, ${email}, ${phone}, ${address}, ${birthday} )";
    dbCon.one(query, req.body)
        .then(function (data) {
            res.json({
                status: "successfull",
                data: data,
                message: "Cliente registrado con exito"
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

module.exports = {
    clientAdd: clientAdd
}

