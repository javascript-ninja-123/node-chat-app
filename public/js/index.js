const socket = io();

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


// socket.on('newEmail', function(email){
//     console.log(email)
// })

socket.on('newMessage', function(message){
  console.log(message)
})

socket.on('fromAdmin', function(message){
  console.log(message)
})


socket.on('newUser', function(message){
  console.log(message)
})
