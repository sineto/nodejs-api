const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando App
const app = express();

// permite express retornar requisições recebidas como JSON
app.use(express.json());

// dentro do método cors é possível colocar os dominios que serão restritoa à essa aplicação
app.use(cors());

// Conectando com o DB
mongoose.connect('mongodb://localhost:27017/producthunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir('./src/models');


// Criando rotas
app.use('/api', require('./src/routes'));
app.listen(3001);
