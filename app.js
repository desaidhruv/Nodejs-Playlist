var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static('assets'))
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact', {qs:req.query});
});

app.post('/contact',urlencodedParser, (req, res) => {
     console.log(req.body);
    res.render('contact-success', {data:req.body});
});

app.get('/profile/:name', (req, res) => {
    var data = {age: 40, job: 'Ninjas', hobbies: ['eat', 'sleep', 'code', 'repeat']}
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);