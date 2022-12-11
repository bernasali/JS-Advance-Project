const http = require('http');
const socketIO = require('socket.io');
const port = 8080;
const express = require('express');
const app = express();
const server = http.createServer(app);
const path = require('path');
const publicPath = path.join(__dirname, '/../client');
const io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
    console.log("A new user just connected");


    socket.on('disconnect', () => {
        console.log("User was disconnested ");
    })

});




server.listen(8080, () => {
    console.log('Server is listening: 8080');

})