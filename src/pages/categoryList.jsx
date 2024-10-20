import { useEffect, useState } from "react";
import CategoryCard from "../components/categoryCard";
import { mealService } from "../assets/constants";
import { Skeleton } from "@/components/ui/skeleton";

const CategoryList = () => {
  const [categoryListState, setCategoryListState] = useState([]);

  useEffect(() => {
    mealService
      .getCategoryList()
      .then((res) => setCategoryListState(res.data?.categories))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-[320px] md:w-[700px] lg:w-[1000px] m-auto font-poppins">
      <div className="my-5">
        <h1 className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
          WELCOME TO MEALAPP
        </h1>
        <p className="text-center text-xs md:text-sm lg:text-base">
          Search any meal recipe around the world only here
        </p>
      </div>
      <h1 className="text-center font-bold text-lg md:text-2xl">
        Select Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 my-5 gap-2">
        {categoryListState.length > 0 ? (
          categoryListState?.map((item) => {
            return <CategoryCard key={item.idCategory} category={item} />;
          })
        ) : (
          <>
            <Skeleton className={"h-[200px]"} />
            <Skeleton className={"h-[200px]"} />
            <Skeleton className={"h-[200px]"} />
            <Skeleton className={"h-[200px]"} />
            <Skeleton className={"h-[200px]"} />
            <Skeleton className={"h-[200px]"} />
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
