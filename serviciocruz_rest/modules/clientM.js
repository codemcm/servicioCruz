/* 
    @author Martin Cruz 
    created_date: 2020-05-02 
 
*/
const dbCon = require("../config/config");

function clientAdd(req, res, next) {
    Console.log(CLIENT);
    const query = "SELECT * FROM PUBLIC.clientAdd(${name}, ${last_name}, ${cell}, ${observations} )";
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
function respondiend(req, res, next) {
    res.send('respond with a resource');
}
module.exports = {
    add: clientAdd,
    respondiend: respondiend
} 