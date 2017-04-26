const express = require('express'),
	  path = require('path'),
      http = require('http'),
      passport = require('passport'),
	  html = require('html'),
      util = require('util'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      methodOverride = require('method-override'),
	  app = express(),
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

var LINKEDIN_API_KEY = "77z6i13ivps0pq";
var LINKEDIN_SECRET_KEY = "3yynGlqLel1da9bq";


app.use( express.static( path.join(__dirname, '../client/build/') ) );


app.get('/login', (req, res) => {
	res.send('Login');
})

.get('/auth/linkedin', (req, res) => {
	res.send('get token');
})

.get('/auth/linkedin/callback', (req, res) => {
	res.send('token is ok');
})

.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../client/build/index.html'));
	// res.send('coucou');
})

.listen(port, (err) => {
	if (err) {
		throw err;
	}
	console.log('Server is running on port ' + port);
});
