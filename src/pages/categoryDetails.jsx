import { useEffect, useState } from "react";
import { mealService } from "../assets/constants";
import MealCard from "../components/mealCard";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CategoryDetails = () => {
  const [categoryDetailsState, setCategoryDetailsState] = useState([]);
  const [firstIndexPage, setFirstIndexPage] = useState(9);

  const params = useParams();

  useEffect(() => {
    mealService
      .getCategoryDetails(params?.category)
      .then((res) => {
        setCategoryDetailsState(res.data?.meals);
      })
      .catch((err) => console.log(err));
  }, [params]);

  const paginatedCategory = categoryDetailsState?.slice(0, firstIndexPage);

  const handlePagination = () => {
    if (firstIndexPage == categoryDetailsState?.length) {
      return null;
    }
    setFirstIndexPage((cur) => cur + 9);
  };
  return (
    <div className="w-[320px] md:w-[700px] lg:w-[1000px] m-auto py-5 font-poppins">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category-details/` + params?.category}>
              {params?.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-start font-bold">
          {params?.category}
        </h1>
      </div>
      <Separator />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 m-auto py-5">
        {paginatedCategory?.map((item) => {
          return <MealCard key={item.strMeal} meal={item} />;
        })}
      </div>
      <br />
      <button
        className={`w-full h-[50px] border-2 rounded-xl flex justify-center items-center text-xl m-auto ${
          firstIndexPage >= categoryDetailsState?.length ? "hidden" : ""
        }`}
        type="button"
        onClick={handlePagination}
      >
        Load More
      </button>
    </div>
  );
};

export default CategoryDetails;
