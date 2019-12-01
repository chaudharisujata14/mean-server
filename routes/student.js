var express = require("express");
var app = express();
var db = require("../db");
app.use(express.json());

app.get('/', (req, res) => {
  const statement = `select * from student`;
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
    const {rollno,name,division,marks} = req.body;
    const statement = `insert into student values(${rollno},"${name}","${division}",${marks})`;
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
  

  app.put('/:rollno', (req, res) => {
    const no = req.params.rollno;
    const {name,division,marks} = req.body;
    const statement = `update student set name ="${name}", div = "${division}", marks= ${marks} where rollno=${no}`;
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


  app.delete('/:rollno', (req, res) => {
    const rollno = req.params.rollno;
    const statement = `delete from student where rollno=${rollno}`;
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


