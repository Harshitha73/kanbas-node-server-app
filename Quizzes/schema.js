import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({

  title: { type: String, default: mongoose.Types.ObjectId, required: true },
  description: { type: String, required: true },
  course: String,
  for: String,
  published: { type: Boolean, default: false },
  quizType: {
    type: String,
    enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
    default: "Graded Quiz"
  },
  points: { type: Number, default: 0 },
  assignmentGroup: {
    type: String,
    enum: ["Quizzes", "Exams", "Assignments", "Project"],
    default: "Quizzes"
  },
  shuffleAnswers: { type: Boolean, default: true },
  timeLimit: { type: Number, default: 20 },
  timeLimitCheckbox: { type: Boolean, default: true },
  multipleAttempts: { type: Boolean, default: false },
  showCorrectAnswers: { type: Boolean, default: false},
  accessCode: { type: String, default: "" },
  oneQuestionAtATime: { type: Boolean, default: true },
  webcamRequired: { type: Boolean, default: false },
  lockQuestionsAfterAnswering: { type: Boolean, default: false },
  due: { type: Date, required: true },
  availableFrom: { type: Date, required: true },
  availableUntil: { type: Date, required: true }
}, { collection: "quizzes" });

export default quizSchema;
