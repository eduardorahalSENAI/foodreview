import express from 'express';
import user from './user.routes.js';
import restaurant from './restaurant.routes.js';
import review from './review.routes.js';
import login from './login.routes.js';

const router = express.Router();

router.use('/user', user);
router.use('/restaurant', restaurant);
router.use('/review', review);
router.use('/login', login);

export default router;