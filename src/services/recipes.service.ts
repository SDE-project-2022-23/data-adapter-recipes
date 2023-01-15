import { Recipe } from "src/types/Recipes";

export class RecipesService {
  public static clearRecipes(recipes: any): Recipe {
    var recipe: Recipe = {
      ingredients: [],
      title: recipes.title,
      image: recipes.image,
      instruction: recipes.instructions,
    };
    recipes.extendedIngredients.forEach((ingredient: any) => {
      recipe.ingredients.push({
        name: ingredient.name,
        quantity: ingredient.amount,
        unit: ingredient.unit,
        id: ingredient.id,
      });
    });
    return recipe;
  }
}
