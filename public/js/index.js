var socket = io();
socket.on ('connect', function () {
  console.log ('Connected to server');

});
socket.on ('disconnect', function () {
  console.log ('Disconected from Server');
});



socket.emit ('createMessage', {
  from: 'Kevin Rose',
  text: 'Where is my whiskey?'
})

socket.on ('newMessage', function (message) {
  console.log (message);
});
