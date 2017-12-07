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

  socket.on('disconnect', () => {
    console.log('User is disconnected');
  })
});



server.listen(PORT,() => {
  console.log(`server is up on ${PORT}`)
})
