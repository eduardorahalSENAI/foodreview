import express from 'express';
import User from '../models/User.js';

const user = express.Router();

user.get('/', (req, res) => res.send("Rota de Usuários"));

user.post('/register', (req, res) => {
    const { name, email, password, admin } = req.body;
    const newUser = new User({name, email, password, admin});
    const savedUser = newUser.save();
    if (savedUser) {
        res.json({message: "Obrigado pelo Cadastro!"})
    }
});

export default user;