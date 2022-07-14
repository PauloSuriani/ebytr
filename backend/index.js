const express = require('express');

const toDoListRoters = require('./src/routers/toDoListRouter');

const app = express();

app.use(express.json());

app.use('/todolist', toDoListRoters);

app.listen(3005, () => {
  console.log('Aplicação ouvindo na porta 3005');
}); 
