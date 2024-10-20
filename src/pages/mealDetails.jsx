import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mealService } from "../assets/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

const MealDetails = () => {
  const [meal, setMeal] = useState({});
  const params = useParams();

  useEffect(() => {
    mealService.getMealDetails(params.id).then((res) => setMeal(res.data));
  }, [params]);

  if (meal?.meals?.[0]) {
    console.log(meal?.meals?.[0]);
    const ingredients = Object.keys(meal?.meals?.[0]).filter((item) => {
      return item.includes("strIngredient");
    });

    const measures = Object.keys(meal?.meals?.[0]).filter((item) => {
      return item.includes("strMeasure");
    });

    const filteredIngredient = ingredients
      ?.map((ingredient) => {
        return meal?.meals[0][ingredient];
      })
      .filter((item) => {
        return item != "" && item != null && item != " ";
      });

    const filteredMeasure = measures
      ?.map((measure) => {
        return meal?.meals[0][measure];
      })
      .filter((item) => {
        return item != "" && item != null && item != " ";
      });

    const hasil = filteredIngredient.map((key, index) => {
      return { ingredient: key, measure: filteredMeasure[index] };
    });

    console.log(meal.meals[0].strYoutube);
    const rawUrl = meal.meals[0].strYoutube.split("/");
    const videoUrl =
      "https://www.youtube.com/embed/" + rawUrl[rawUrl.length - 1];
    return (
      <div className="flex flex-col w-full px-10 py-5 gap-x-3 font-poppins">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/category-details/` + meal?.meals?.[0].strCategory}
              >
                {meal?.meals?.[0].strCategory}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/meal-details/` + meal?.meals?.[0].idMeal}>
                {meal?.meals?.[0].strMeal}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="my-5">
          <h1 className="text-3xl font-bold text-start">
            {meal?.meals?.[0].strMeal}
          </h1>
        </div>
        <Separator />
        <img
          src={meal?.meals?.[0].strMealThumb}
          alt={meal?.meals?.[0].strMeal}
          className="h-full rounded-2xl w-[500px] m-auto my-5"
        />

        <Separator />
        <br />
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">Instructions</h1>
          <br />
          <p className="text-sm md:text-base lg:text-lg text-justify">
            {meal?.meals?.[0].strInstructions}
          </p>
        </div>
        <br />
        <Separator />
        <br />
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">Recipe</h1>
          <br />
          <Table>
            <TableHeader>
              <TableRow className={"bg-gray-100"}>
                <TableHead>Ingredient</TableHead>
                <TableHead>Measure</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hasil.map((value) => (
                <TableRow key={value.ingredient}>
                  <TableCell>{value.ingredient}</TableCell>
                  <TableCell>{value.measure}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <iframe
          src={videoUrl}
          allowFullScreen
          className="m-auto mt-10 w-full h-[600px]"
        ></iframe>
      </div>
    );
  } else {
    return <div>not found</div>;
  }
};

export default MealDetails;
