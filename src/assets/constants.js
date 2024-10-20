import MealService from "../services/MealServices";

export const listOfCategoriesUrl =
  "https://www.themealdb.com/api/json/v1/1/categories.php";
export const categoryDetailsUrl =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
export const mealDetailsUrl =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const mealService = new MealService(
  listOfCategoriesUrl,
  categoryDetailsUrl,
  mealDetailsUrl
);
