import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const newQuestion = {
      ...req.body,
      quiz: quizId,
    };
    const question = await dao.createQuestion(newQuestion);
    res.json(question);
  };
  const deleteQuestion = async (req, res) => {
    const status = await dao.deleteQuestion(req.params.questionId);
    res.json(status);
  };

  const findQuestionsForQuiz = async(req, res) =>{
    const { quizId } = req.params;
    const questions = await dao.findQuestionsForQuiz(quizId);
    try {
      if(quizId){
       const questions = await dao.findQuestionsForQuiz(quizId);
      }
      else{
       const questions = await dao.findAllQuestions();
      }
      res.send(questions);
   } catch (error) {
       console.error(error);
       res.status(500).send("An error occurred while trying to fetch questions for quiz");
   }
  };

  const findQuestionById = async (req, res) => {
    const question = await dao.findQuestionById(req.params.questionId);
    res.json(question);
  };
  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.updateQuestion(questionId, req.body);
    console.log("updatequestion: ", questionId);
    await dao.findQuestionById(questionId);
    res.json(status);
  };



  //app.post("/api/questions", createQuestion);
  app.post("/api/quizzes/:quizId/questions", createQuestion);
  app.get("/api/questions/:questionId", findQuestionById);
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
  app.put("/api/questions/:questionId", updateQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);

}