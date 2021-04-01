let PORT = process.env.PORT || 5000;
let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

app.use(express.static('client'));
app.use('/css',express.static(__dirname + 'client/css'));
app.use('/images',express.static(__dirname + 'client/images'));
app.use('/js',express.static(__dirname + 'client/js'));
server.listen(PORT, function() {
    console.log('DoThang is Running');
});

