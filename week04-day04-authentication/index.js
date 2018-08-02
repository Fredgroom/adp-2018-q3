const express = require('express')
const basicAuth = require('basic-auth');

const app = express();

const auth = function (req, res, next) {

  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = basicAuth(req);
  console.log(user);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  //query the database for the username
  //find the salted/hashed password
  //compare their inputted password, hashed & salted with that one

  if (user.name === 'hello' && user.pass === 'world') {
    return next();
  } else {
    return unauthorized(res);
  };
};

app.get('/', auth, function (req, res) {
  res.send('a response');
});

app.listen(3002, (err) => console.log('Express started.'))



Collapse 
Message Input


Message #ldn-adpp-q3-2018

About
#ldn-adpp-q3-2018


Channel Details
