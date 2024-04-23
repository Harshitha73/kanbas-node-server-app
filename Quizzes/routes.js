import * as dao from "./dao.js";

function QuizRoutes(app) {
  app.put("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const quiz = req.body;
    const status = await dao.updateQuiz(qid, quiz);
    res.sendStatus(204);
  });    

  app.delete("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
    res.sendStatus(204);
  });    

  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    const newQuizResponse = await dao.createQuiz(newQuiz);
    res.send(newQuizResponse);
  });

  app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    try {
        const quizzes = await dao.findQuizzesForCourse(cid);
        res.send(quizzes);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while trying to fetch quizzes for course");
    }
});

    app.get("/api/quizzes/:qid", async (req, res) => {
        try {
            const { qid } = req.params;
            const quiz = await dao.findQuizById(qid);
            if (!quiz) {
                res.status(404).send("Quiz not found");
                return;
              }
              res.send(quiz);
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while trying to fetch quiz by id");
        }
  });

  app.put("/api/quizzes/:qid/publish", async (req, res) => {
    try {
        const { qid } = req.params;
        const { published } = req.body;
        await dao.togglePublishQuiz(qid, published);
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while trying to toggle publish status of quiz");
    }
  });
}

export default QuizRoutes;
