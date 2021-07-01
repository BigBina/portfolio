//Standard Startup
var express = require('express');
var app = express();

var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static("./node_modules"));

//======FUNCTIONS======//


//======ROUTES=======//
app.get("/", function(req, res){
    res.render("landing")
});

app.get("/portfolio" , function(req, res){
    res.render("portfolio");
});

app.get("/about" , function(req,res){
    res.render("about");
});

app.get('/beya', function(req,res){
    res.render('beya');
})

app.get('*', function(req,res){
    res.render("bruh");
})

var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log("it works");
});