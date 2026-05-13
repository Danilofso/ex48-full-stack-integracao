const express = require('express');
const cors = require('cors');
const app = express();

// CORS: aceita requisições de http://localhost:3001
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());
app.use(express.static('public'));

let tarefas = [], nextId = 1;

// TODO:
// GET  /api/tarefas  → 200 + array de tarefas
// POST /api/tarefas  → 201 + tarefa criada { id, titulo }

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
