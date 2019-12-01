var express = require("express");
var app = express();
var db = require("../db");
app.use(express.json());

app.get('/', (req, res) => {
  const statement = `select * from teacher`;
  var connection = db.connect();
  connection.query(statement,(error,result)=>{
      connection.end();
      if(error==null)
      {
          res.send(JSON.stringify(result));
      }
      else
      {
        res.send(JSON.stringify(error));
      }
  });
});

app.post('/', (req, res) => {
    const {id,name,address} = req.body;
    const statement = `insert into teacher values(${id},"${name}","${address}")`;
    var connection = db.connect();
    connection.query(statement,(error,result)=>{
        connection.end();
        if(error==null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
          res.send(JSON.stringify(error));
        }
    });
  });
  

  app.put('/:id', (req, res) => {
    const id = req.params.id;
    const {name,address} = req.body;
    const statement = `update teacher set name ="${name}", address= ${address} where id=${id}`;
    var connection = db.connect();
    connection.query(statement,(error,result)=>{
        connection.end();
        if(error==null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
          res.send(JSON.stringify(error));
        }
    });
  });


  app.put('/:id', (req, res) => {
    const id = req.params.id;
    const statement = `delete from teacher where id=${id}`;
    var connection = db.connect();
    connection.query(statement,(error,result)=>{
        connection.end();
        if(error==null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
          res.send(JSON.stringify(error));
        }
    });
  });


module.exports = app;


