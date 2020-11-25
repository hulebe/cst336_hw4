const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//Faker
const faker = require("faker");
var randomEmail = faker.internet.email();

//routes
app.get("/", function(req, res){
    res.render("index.html", {"randomEmail": randomEmail});
});

app.get("/page2", function(req, res){
    res.render("page2.html");
});

app.get("/page3", function(req, res){
    res.render("page3.html"); 
});

app.get("/page4", function(req, res) {
    res.render("page4.html");
});

//starting server 
app.listen(process.env.PORT, process.env.IP, function(){ 
console.log("Running Express Server...");
});