var express = require("express");
var app = express();
var student= require("./routes/student");
var teacher= require("./routes/teacher");

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/',(req,res) => {
 res.send("welcome to my world");
});

app.use('/student',student);
app.use('/teacher',teacher);

app.listen(9898, () => {
    console.log('App listening on port 9898!');
});
