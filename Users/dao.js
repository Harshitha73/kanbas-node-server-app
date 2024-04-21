import model from "./model.js";
import mongoose from "mongoose";
export const findUserByCredentials = (username, password) =>
  model.findOne({
    username: username,
    password: password,
  });
export const createUser = (user) => {
  user._id=new mongoose.Types.ObjectId();
    return model.create(user);
  }  
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
export const findUsersByRole = (role) => model.find({ role: role });
export const findUserByUsername = (username) => model.findOne({ username: username });