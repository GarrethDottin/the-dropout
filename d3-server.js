var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/visualization.html');
});

app.get('/results', function(req, res) { 
	res.sendFile(__dirname + '/results.csv')
})

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});