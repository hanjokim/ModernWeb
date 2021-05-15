var express = require('express');

var app = express();
app.use(express.static('public'));

app.all('/a', function (request, response) {
    response.send('<h1>Page A</h1>');
});
app.all('/b', function (request, response) {
    response.send('<h1>Page B</h1>');
});

app.all('/c', function (request, response) {
    response.send('<h1>Page C</h1>');
});

app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});