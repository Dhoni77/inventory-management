import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    id: { type: String, required: true },
    category: { type: String, required: true },
    discountedPrice: { type: Number, required: true },
});

export default mongoose.model('Discount', itemSchema);