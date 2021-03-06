var express = require("express");
var app = express();
var request = require("request");
var PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("search");
});

app.get("/results", function(req, res) {
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=";
    var search = req.query.search;
    
    request(url+search, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            
            res.render("results.ejs", {data: data});
        }
    });
    
});

app.listen(PORT, process.env.IP, function(){
    console.log("Movie App has started!!!");
});