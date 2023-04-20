import express from 'express';

const user = express.Router();

user.get('/', function(req, res) {
    res.send("Rota de Usuário")
});

user.get('/register', (req, res) => res.send("Cadastro de Novo Usuário"));

export default user;