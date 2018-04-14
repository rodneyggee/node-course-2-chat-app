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

  socket.on ('createMessage', (message) => {
    io.emit ('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });


  socket.on ('disconnect', () => {
    console.log ('client disconnected');
  })
});


server.listen (port, () => {
  console.log ("Server stating on port ", port);
})
