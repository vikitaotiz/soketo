import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server,{ cors: {
    origin: "*"
}});

app.get('/', (req, res) => {
  res.send('<h1>Realtime Relay Engine</h1>');
});

app.get('/notify', (req, res) => {

  io.emit("test_ch", "Payment Notification Sent")

  res.json({ message: "Payment Notification Sent"});
});

io.on('connection', (socket) => {
  
  console.log("front connected");
  
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});