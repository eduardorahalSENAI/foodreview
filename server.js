// Importação de Pacotes Necessários

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
import connection from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Carregar as configurações

dotenv.config({ path: './config/config.env' });

// Rodar o Servidor Express

const server = express();
const port = process.env.PORT || 5000;

server.listen(port, console.log(`Servidor rodando na porta ${port}...`))

const testConn = async () => {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConn();

server.use(cors());
server.use(bodyParser.urlencoded( { extended: true } ));
server.use(bodyParser.json());
server.use(router);

