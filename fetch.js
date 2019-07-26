var express = require('express')
var app = express();
var fetcher = require('@fvillalobos14/fetcher');

var PORT = 3000

app.get('/', function(req, res){
    fetcher.getPosts().then(function(response) {
        res.send(response);
    });
})

app.listen(PORT, function () {
    console.log(`Running on port ${PORT}`)
});