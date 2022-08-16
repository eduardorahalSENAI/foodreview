import express from 'express';

const restaurant = express.Router();

restaurant.get('/', (req, res) => res.send("Rota de Restaurantes"));

export default restaurant;