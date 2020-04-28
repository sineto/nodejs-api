const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando App
const app = express();

// Conectando com o DB
mongoose.connect('mongodb://localhost:27017/producthunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir('./src/models');


// Criando rotas
app.use('/api', require('./src/routes'));
app.listen(3001);
