import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const coffeeSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Every string requires a name'],
        timestamps : true,
    },
    price : Number,
    isAvailable : {
        type : Boolean,
        default : true
    },
})

const Coffee = mongoose.model('Coffee', coffeeSchema)
export default Coffee;