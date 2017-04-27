const express = require('express'),
	  path = require('path'),
	  mongoose = require('mongoose'),
      http = require('http'),
      passport = require('passport'),
	  html = require('html'),
      util = require('util'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      methodOverride = require('method-override'),
	  app = express(),
	  User = require('./models/users');
      port = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat', name: 'id' }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://admin:admin@ds151127.mlab.com:51127/p7-social');






app.use( express.static( path.join(__dirname, '../client/build/') ) );




app.get('/login', (req, res) => {
	res.send('Login');
})

// See all users
.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err) throw err;

		res.json(users);
	});
})

// User can register
.post('/subscribe', (req, res) => {
	let newUser = User({
		username: req.body.name,
		password: req.body.password
	});
	newUser.save( err => {
		if (err) throw err;

		res.send('new user signed up');
	})
})

.get('/auth/linkedin', (req, res) => {
	res.send('get token');
})

.get('/auth/linkedin/callback', (req, res) => {
	res.send('token is ok');
})

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../client/build/index.html'));
})

.listen(port, (err) => {
	if (err) {
		throw err;
	}
	console.log('Server is running on port ' + port);
});
