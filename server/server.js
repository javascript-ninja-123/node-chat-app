//setting up path
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const  {generateMessage} = require('./utils/message');


const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

//setting up express js
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.emit('newMessage', generateMessage('Admin','welcome to the app'))
  socket.broadcast.emit('newMessage',generateMessage('Admin','new user is joined'))


  socket.on('createMessage', (message) => {
    console.log(message)
    io.emit('newMessage', generateMessage(message.from, message.text))
    // callback('This is from the server');
    // socket.broadcast.emit('newMessage',{
    //   ...newMessage,
    //   createdAt: new Date().getTime()
    // })
  } )
  socket.on('disconnect', () => {
    console.log('User is disconnected');
  })
});



server.listen(PORT,() => {
  console.log(`server is up on ${PORT}`)
})
