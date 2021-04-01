// let PORT = process.env.PORT || 5000;
// let express = require('express');
// let app = express();

// let http = require('http');
// let server = http.Server(app);

// app.use(express.static('client'));

// server.listen(PORT, function() {
//     console.log('DoThang is Running');
// });

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('client');
});

app.listen(3000);