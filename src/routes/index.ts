import { Router } from "express";
import recipesRouter from "./recipes.route";

/**
 * Routeur global de l'application. Utilise les routeurs des ressources.
 */
const globalRouter = Router();

globalRouter.use("/recipes", recipesRouter);

globalRouter.route("/test").get((req, res) => {
  res.status(200).json({ message: "Vous êtes connecté" });
});

export default globalRouter;
