require ('./config/config');
const http = require ('http')
const path = require ('path');
const publicPath = path.join (__dirname, '../public');

const express = require ('express');
const socketIO = require ('socket.io');

const {generateMessage} = require ('./utils/message')

var app = express ();
var server = http.createServer (app);
var io = socketIO(server);


const port = process.env.PORT;

app.use (express.static(publicPath));

io.on ('connection', (socket) => {
  console.log ('New user connected');
  socket.emit ('newMessage', generateMessage ('Admin', 'Welcome to the chat app'));
  socket.broadcast.emit ('newMessage',  generateMessage ('Admin', 'New user joined'));



  socket.on ('createMessage', (message, callback) => {
    console.log (message);
    callback ('this is from the server');

    io.emit ('newMessage', generateMessage (message.from, message.text));

    // socket.broadcast.emit ('newMessage',  {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });


  });


  socket.on ('disconnect', () => {
    console.log ('client disconnected');
  })
});


server.listen (port, () => {
  console.log ("Server stating on port ", port);
})
