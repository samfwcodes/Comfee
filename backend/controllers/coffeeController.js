import Coffee from "../models/coffeeModel.js";

export const addCoffee = async (req, res) => {
    try {
        const newCoffee = new Coffee(req.body)
        const savedCoffee = await newCoffee.save()
        res.status(201).json(savedCoffee)
    } catch (err) {
        res.status(500).send('Can not add Coffee. Please Enter Coffee Name')
    }
};

export const getCoffee = async (req, res) => {
    try {
        const allCoffee = await Coffee.find()
        if (allCoffee.length === 0) {
            return res.status(200).send('There are no coffee left in stocks. Come back tommorrow')
        }
        res.status(200).json(allCoffee)
    } catch (err) {
        res.status(500).send('There was an error fetching data. Try Again Later')
    }
};

export const updateCoffee = async (req, res) => {
    try {
        const { id } = req.params
        const updatedData = req.body
        if(!updatedData) {
            return res.status(404).send('Please Provide Data to Update')
        }

        const updatedCoffee = await Coffee.findByIdAndUpdate(id, updatedData, { 'returnDocument': 'after', runValidators: true }
        )

        if (!updatedCoffee) {
            return res.status(404).send(`No coffee found with id ${id}`)

        }
        res.status(200).json(updatedCoffee)

    } catch (err) {
        res.status(500).send('ID is not available. Please double check your id format')
    }
};

export const deleteCoffee = async (req, res) => {
    try {
    const { id } = req.params
    const deletedCofee = await Coffee.findByIdAndDelete(id)
    if (!deletedCofee) {
        res.status(404).send(`Coffee with id ${id} not found`)
    }
    res.status(200).send(`Successfully deleted coffe with id ${id}`);
    } catch (err) {
        res.status(500).send('ID is not available. Please double check your id format')
    }
};
