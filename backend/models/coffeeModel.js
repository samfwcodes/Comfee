import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const coffeeSchema = mongoose.Schema(
      {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    description: {
      type: String,
      required: true,
      maxlength: 300,
    },

    ingredients: {
      type: [String],
      required: true,
      validate: {
        validator: (value) => value.length >= 2 && value.length <= 5,
        message: "Coffee must contain 2-5 ingredients",
      },
    },

    sizes: {
      type: [String],
      enum: ["Small", "Medium", "Large"],
      required: true,
      default: ["Small", "Medium", "Large"],
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["Hot Coffee", "Cold Coffee", "Espresso", "Special"],
      default: "Hot Coffee",
    },

    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Coffee = mongoose.model('Coffee', coffeeSchema)
export default Coffee;