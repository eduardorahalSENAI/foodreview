import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

const login = express.Router();

login.post('/', async (req, res) => {
    const { email, password } = req.body;

    // 1º - Pesquisar a existência deste usuário no BD

    const registeredUser = await User.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    // 2º - Caso inexistente, informar usuário

    if(!registeredUser)
        return res
            .status(400)
            .json({ message: "Email ou Senha incorretos." });
    
    // 3º - Validar a senha
    // 3.1 - Caso senha inválida, informar usuário

    if(!bcrypt.compareSync(password, registeredUser.password))
        return res
            .status(400)
            .json({ message: "Email ou Senha incorretos." });

    // 3.2 - Caso senha correta, gerar token
    
    const token = Jwt.sign(
        { 
            id: registeredUser.id, 
            email: registeredUser.email 
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    // 3.3 - Enviar Token ao Usuário

    res.json({ message: "Bem-vindo!", token: token });
});

export default login;