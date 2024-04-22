import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  // _id: {type: String, default: mongoose.Types.ObjectId, unique: true},
  type: String,
  title: String,
  quiz: String,
  pts: Number,
  question: String,
  options: {
    type: Map,
    of: String
  },
  answer: String
},
  { collection: "questions" });
export default questionSchema;
