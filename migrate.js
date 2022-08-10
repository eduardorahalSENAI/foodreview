import connection from './config/db.js';
import Restaurant from './models/Restaurant.js';
import Review from './models/Review.js';

const migrate = async () => {
    try {
        const resultado = await connection.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};

migrate();