export type Recipe = {
  ingredients: Ingredient[];
  title: string;
  image: string;
  instruction: string;
};

export type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};
