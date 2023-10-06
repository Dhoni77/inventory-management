import mongoose, { Schema } from "mongoose";

const itemSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

itemSchema.set('timestamps', true);

export default mongoose.model('Items', itemSchema);