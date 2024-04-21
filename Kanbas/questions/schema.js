import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  _id: String,
  type: String,
  quiz: String,
  pts: Number,
  question: String,
  option: {},
  answer: String
},
  { collection: "questions" });
export default questionSchema;
