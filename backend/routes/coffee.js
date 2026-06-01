import express from 'express';
const router = express.Router();
import {
    addCoffee,
    getCoffee,
    updateCoffee,
    deleteCoffee,
    getOneCoffee
} from '../controllers/coffeeController.js'


router.post('/', addCoffee);
router.get('/', getCoffee);
router.get('/:id', getOneCoffee)
router.patch('/:id', updateCoffee);
router.delete('/:id', deleteCoffee);

export default router;