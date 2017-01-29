const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const path = require('path');

const index = require('./controllers/index');
app.use('/', index);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

http.createServer(app)
.listen(port, function(){
  console.log('App listening on port ' + port + '!');
});
