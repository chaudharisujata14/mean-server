var mysql = require("mysql");

function connect()
{
    var connection = mysql.createConnection({
        host : "172.18.5.186",
        user : "root",
        password: "manager",
        database: "school",
        port:9099
    }); 

    connection.connect();
    return connection;
}

module.exports = {connect : connect}
