import model from "./model.js";
import mongoose from "mongoose";
export const createModule = (module) => {
    module._id=new mongoose.Types.ObjectId();
    return model.create(module);
};
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const deleteModule = (moduleId) => {return model.deleteOne({ _id: moduleId });};
export const updateModule = (moduleId, module) => {return model.updateOne({ _id: moduleId }, { $set: module });};
export const findModulesForCourse = (courseId) => model.find({ course: courseId });