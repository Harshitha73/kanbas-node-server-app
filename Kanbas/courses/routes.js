import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };
  const findAllUsers = async (req, res) => {
    const { role } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
    const users = await dao.findAllUsers();
    res.json(users);
    return;
  };
  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    console.log("updateuser: ", userId);
    await dao.findUserById(userId);
    res.json(status);
  };
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
      return;
    }
    
    const currentUser = await dao.createUser(req.body);
    
    req.session["currentUser"] = currentUser;
    globalCurrentUser=currentUser;
    res.json(currentUser);
  };
  const signin = async (req, res) => {
    const { username, password } = req.body;
    console.log("routes.js: ",username," ",password)
    const currentUser = await dao.findUserByCredentials(username, password);
    console.log("routes.js: currentUser:",currentUser);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      globalCurrentUser=currentUser;
      res.json(currentUser);
    } else {
      res.sendStatus(401);
    }
  };
  const signout = (req, res) => {
   // currentUser = null;
    req.session.destroy();
    res.sendStatus(200);
  };
  const profile = (req, res) => {
    let currentUser = req.session["currentUser"];
    currentUser=globalCurrentUser;
    if (!req.session.currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };


  app.post("/api/courses", createCourse);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}