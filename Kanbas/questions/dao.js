import model from "./model.js";
import mongoose from "mongoose";
export const findAllQuestions = () => model.find();
export const findQuestionById = (questionId) => model.findById(questionId);
export const updateQuestion = (questionId, question) =>model.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestion = (questionId) =>  model.deleteOne({ _id: questionId });
export const createQuestion = (question) => {  question._id = new mongoose.Types.ObjectId();  return model.create(question);};
