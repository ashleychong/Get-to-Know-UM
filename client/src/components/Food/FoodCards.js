import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import FoodCard from "./FoodCard";

const FoodCards = () => {
    const { foodList, isLoading } = useSelector((state) => state.food);

    if (!foodList?.length && !isLoading) {
      return "No listed food";
    }

    return isLoading ? (
      <CircularProgress />
    ) : (
      foodList.map((food, index) => (
        <FoodCard
          key={food._id}
          food={food}
          index={index+1}
        />
      ))
    );
};

export default FoodCards;