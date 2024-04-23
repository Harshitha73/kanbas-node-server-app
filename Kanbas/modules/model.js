import mongoose from "mongoose";
import moduleSchema from "./schema.js";
const model = mongoose.model("moduleSchema", moduleSchema);
export default model;