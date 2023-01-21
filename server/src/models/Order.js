import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: { type: Array, required: true, max: 100 },
    amount: { type: Number, required: true },
    status: { type: String, default: "Pending"}
},
{
    timestamps: true,
});

export const OrderModel = mongoose.model("Order", OrderSchema);