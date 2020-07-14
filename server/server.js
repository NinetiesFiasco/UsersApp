const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const {prepare} = require('./sqlite.js');

const registrate = require('./api/register/router');
const users = require('./api/users/router');
const login = require('./api/login/router');

const session = require('express-session');

prepare();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
  session({
    secret: 'my big secret',
    resave: true,
    saveUninitialized: true
  })
)


app.use('/api/registrate',registrate);
app.use('/api/users',users);
app.use('/api/login',login);

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.use(express.static(__dirname+'/build'));
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root: __dirname })
  });
}


app.get('/myObj', function (req, res) {
  res.json({
    "header": "header from server already",
    "body":"body from server already"
  });
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
