import model from "./model.js";
import mongoose from "mongoose";

export const findQuestionById = (questionId) => model.findById(questionId);
export const updateQuestion = (questionId, question) =>model.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestion = (questionId) =>  model.deleteOne({ _id: questionId });
export const createQuestion = (question) => {  
    //question._id = new mongoose.Types.ObjectId(); 
    delete question._id 
    return model.create(question);};
export const findQuestionsForQuiz = (quizId) => model.find({ quiz: quizId });

