import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";


import ApprovedFoodCard from "./ApprovedFoodCard";

const ApprovedFoodCards = (props) => {
    const { editInPopup } = props;

    const { foodList, isLoading } = useSelector(
      (state) => state.food
    );

    if (!foodList?.length && !isLoading) {
      return "No listed food";
    }

    return isLoading ? (
      <CircularProgress />
    ) : (
        foodList.map((food) =>
        (<ApprovedFoodCard
            key={food._id}
            food={food}
            editInPopup={editInPopup} />
        ))
    );
};

export default ApprovedFoodCards;