var socket = io();
var messageInput = document.querySelector('#messageInput');
var button = document.querySelector('#button');
var uiList = document.querySelector('#messageList');

var generateMessage = function(from,text){
  return{
    from:from,
    text:text
  }
}

socket.on('connect', function() {
  console.log('Connected to server')

  // socket.emit('createEmail', {
  //   to:'jen@example.com',
  //   text:'Hey this is Andrew'
  // })

});

socket.on('disconnect', function() {
  console.log('disconnected')
})

socket.on('newMessage', function(message){
  console.log(message)
  var li = `<li>
  <p>User: ${message.from}</p>
  <p>${message.text}</p>
  </li>`
  uiList.insertAdjacentHTML('beforeend',li)
})




button.addEventListener('click',function(e){
  e.preventDefault();
  socket.emit('createMessage',generateMessage('user',messageInput.value))
  document.querySelector('#messageInput').value = ''
})
