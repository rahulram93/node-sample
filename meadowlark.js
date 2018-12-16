var express = require('express');

var app = express();

var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.port || 3000);

app.get('/', function(req, res){
  res.render('home');
});


var fortune = require('./lib/fortune.js');
app.get('/about', function(req, res){
  var randomFortune = fortune.getFortune();
  res.render('about', {fortune: randomFortune});
});

// Custom 404 page
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

// Custom 500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log(' Express starter on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});



