import model from "./model.js";
import mongoose from "mongoose";
export const createCourse = (course) => {
    course._id=new mongoose.Types.ObjectId();
    return model.create(course);
};
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const deleteCourse = (courseId) => {return model.deleteOne({ _id: courseId });};
export const updateCourse = (courseId, course) => {return model.updateOne({ _id: courseId }, { $set: course });};