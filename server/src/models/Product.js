import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    file: [{
        imgUrl: { type: String, required: true },
        color: { type: String, required: true},
    }],
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true}
},
{
    timestamps: true,
});

export const ProductModel = mongoose.model("Product", ProductSchema);