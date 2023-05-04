import express from 'express';
import User from "../models/User.js";

const user = express.Router();

user.get('/', function(req, res) {
    res.send("Rota de Usuário")
});

user.post('/register', async (req, res) => {
    const { name, email, password, admin } = req.body;

    const alreadyExistsUser = await User.findOne(
        { where: { email } }
    ).catch((err) => console.log("Error: ", err));

    if (alreadyExistsUser) {
        console.log("Usuário Existente: " + alreadyExistsUser);
        return res
            .status(409)
            .json({ message: "E-mail já utilizado por outro usuário." })
    }

    const newUser = new User({name, email, password, admin});
                    
    const savedUser = await newUser.save().catch((err) => {
                        console.log("Error: ", err);
                        res
                            .status(500)
                            .json({error: "Não foi posível cadastrar o usuário."})
    });

    if (savedUser){
        console.log(savedUser);
        res.json({message: "Obrigado pelo Cadastro!"})
    }

    }
);

export default user;