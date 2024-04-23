import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("coursesModel", schema);
export default model;