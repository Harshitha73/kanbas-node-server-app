import * as dao from "./dao.js";

function ModuleRoutes(app) {
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
    };
    const module = await dao.createModule(newModule);
    res.json(module);
  });
  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.sendStatus(200);
  });   
  app.get("/api/courses/:cid/modules", async (req, res) =>{
    const { cid } = req.params;
    console.log(cid)
    const modules = await dao.findAllModules(cid);
    console.log(modules);
    res.send(modules);
  }); 
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    const status = await dao.updateModule(mid, module);
    res.sendStatus(204);
  });    
}
export default ModuleRoutes;