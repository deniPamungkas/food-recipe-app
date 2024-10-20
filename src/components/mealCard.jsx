import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MealCard = ({ meal }) => {
  return (
    <Link to={"/meal-details/" + meal.idMeal}>
      <div className="rounded-2xl overflow-hidden relative cursor-pointer font-poppins">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="absolute bg-black/50 top-0 bottom-0 right-0 left-0 p-2 flex justify-center items-center">
          <span className="text-white font-semibold text-xs md:text-xl lg:text-2xl text-center">
            {meal.strMeal}
          </span>
        </div>
        <div
          className={`bg-white absolute top-0 bottom-0 right-0 left-0 translate-y-full z-20`}
        ></div>
      </div>
    </Link>
  );
};

MealCard.propTypes = {
  meal: PropTypes.any,
};

export default MealCard;
