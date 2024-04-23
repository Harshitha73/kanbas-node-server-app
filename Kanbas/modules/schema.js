import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    _id: { type: String, default: mongoose.Types.ObjectId, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, deafult: mongoose.Schema.Types.ObjectId, ref: "courses", required: true },
}, { collection: "modules" });
export default moduleSchema;