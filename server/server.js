require ('./config/config');
const http = require ('http')
const path = require ('path');
const publicPath = path.join (__dirname, '../public');

const express = require ('express');
const socketIO = require ('socket.io');

var app = express ();
var server = http.createServer (app);
var io = socketIO(server);


const port = process.env.PORT;

app.use (express.static(publicPath));

io.on ('connection', (socket) => {
  console.log ('New user connected');
  socket.on ('disconnect', () => {
    console.log ('client disconnected');
  })
})


server.listen (port, () => {
  console.log ("Server stating on port ", port);
})
