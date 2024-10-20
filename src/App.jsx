import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryDetails from "./pages/categoryDetails";
import CategoryList from "./pages/categoryList";
import MealDetails from "./pages/mealDetails";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route
          path="/category-details/:category"
          element={<CategoryDetails />}
        />
        <Route path="/meal-details/:id" element={<MealDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
