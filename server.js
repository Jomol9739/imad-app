var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/Rose-Flower',function (req,res) {
    res.send('Hi,Iam the most beautiful Rose flower of lovers ');
});
app.get('/Jasmine-Flowers',function (req,res) {
    res.send('Hi,Iam the most beautiful favourite flower of malayalee girls ');
});
app.get('/lilly-Flowers',function (req,res) {
    res.send('Hi,Iam the most beautiful  flower in the water body ');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
