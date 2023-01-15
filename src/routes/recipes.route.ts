import { RecipesService } from "@services/recipes.service";
import axios from "axios";
import { Request, Response, Router } from "express";

const recipesRouter = Router();

const getRandRecipes = async (req: Request, res: Response) => {
  axios
    .get(
      `${process.env.RECIPES_API}/random?apiKey=${process.env.RECIPES_API_KEY}`
    )
    .then((response) => {
      res.status(200).json({
        recipes: RecipesService.clearRecipes(response.data.recipes[0]),
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
      });
    });
};

recipesRouter.get("/", getRandRecipes);

export default recipesRouter;
