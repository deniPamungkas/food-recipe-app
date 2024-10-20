import axios from "axios";

export default class MealService {
  constructor(listOfCategoriesUrl, categoryDetailsUrl, mealDetailsUrl) {
    this.listOfCategoriesUrl = listOfCategoriesUrl;
    this.categoryDetailsUrl = categoryDetailsUrl;
    this.mealDetailsUrl = mealDetailsUrl;
  }

  async getCategoryList() {
    try {
      const response = await axios.get(this.listOfCategoriesUrl);
      //   console.log(response);
      if (!response) {
        throw new Error("unknown error");
      }
      return response;
    } catch (error) {
      console.log("error:", error);
    }
  }

  async getCategoryDetails(categoryName) {
    try {
      const response = await axios.get(this.categoryDetailsUrl + categoryName);
      //   console.log(response);
      if (!response) {
        throw new Error("unknown error");
      }
      return response;
    } catch (error) {
      console.log("error:", error);
    }
  }

  async getMealDetails(mealId) {
    try {
      const response = await axios.get(this.mealDetailsUrl + mealId);
      //   console.log(response);
      if (!response) {
        throw new Error("unknown error");
      }
      return response;
    } catch (error) {
      console.log("error:", error);
    }
  }
}
