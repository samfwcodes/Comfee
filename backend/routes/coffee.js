import express from 'express';
const router = express.Router();
import {
    addCoffee,
    getCoffee,
    updateCoffee,
    deleteCoffee
} from '../controllers/coffeeController.js'


router.post('/', addCoffee);
router.get('/', getCoffee);
router.patch('/:id', updateCoffee);
router.delete('/:id', deleteCoffee);

export default router;