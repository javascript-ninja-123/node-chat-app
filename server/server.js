//setting up path
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

//setting up express js
const express = require('express');
const app = express();

app.use(express.static(publicPath))


app.listen(PORT,() => {
  console.log(`server is up on ${PORT}`)
})
