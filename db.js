var mysql = require("mysql");

function connect()
{
    var connection = mysql.createConnection({
        host : "192.168.2.18",
        user : "root",
        password: "manager",
        database: "school",
        port:9099
    }); 

    connection.connect();
    return connection;
}

module.exports = {connect : connect}
