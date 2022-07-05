const express = require('express');

const toDoListRoters = require('./src/routers/toDoListRouter');

const app = express(); // 1

app.use(express.json());

app.use('/todolist', toDoListRoters);

// app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3005, () => {
  console.log('Aplicação ouvindo na porta 3005');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}