//setting up path
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io')



const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

//setting up express js
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected')

  // socket.emit('newEmail', {
  //   from:'sung.yi.developer@gmail.com',
  //   text:'What is going on',
  //   createdAt:123
  // });



  socket.on('createMessage', newMessage => {
    console.log('new message',newMessage)
    // io.emit('newMessage', {
    //   ...newMessage,
    //   createdAt: new Date().getTime()
    // })
    socket.broadcast.emit('newMessage',{
      ...newMessage,
      createdAt: new Date().getTime()
    })
  } )

  // socket.on('createEmail', newEmail => {
  //   console.log(`create Email`,newEmail)
  // })

  socket.on('disconnect', () => {
    console.log('User is disconnected');
  })
});



server.listen(PORT,() => {
  console.log(`server is up on ${PORT}`)
})
