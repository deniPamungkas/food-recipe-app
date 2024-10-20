import { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  const imgRef = useRef();
  const imgClass = ["object-cover"];
  return (
    <Link to={"/category-details/" + category.strCategory}>
      <div className="rounded-2xl overflow-hidden relative cursor-pointer z-10 font-poppins">
        <img
          ref={imgRef}
          src={category.strCategoryThumb}
          alt={category.strCategory}
          className={imgClass.join(" ")}
        />
        <div className="absolute bg-black/50 top-0 bottom-0 right-0 left-0 p-2 flex justify-center items-center">
          <span className="text-white font-semibold text-xs md:text-xl lg:text-2xl">
            {category.strCategory}
          </span>
        </div>
      </div>
      {/* <div className="bg-white h-[200px] border-2 -translate-y-4 rounded-b-2xl"></div> */}
    </Link>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.any,
};

export default CategoryCard;
