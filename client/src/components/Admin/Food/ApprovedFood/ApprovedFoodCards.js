import { useSelector } from "react-redux";
import { CircularProgress, Divider, Paper, Grid } from "@material-ui/core";

import ApprovedFoodCard from "./ApprovedFoodCard";

const ApprovedFoodCards = (props) => {
  const { editInPopup } = props;

  // const { foodList, isLoading } = useSelector((state) => state.food);
  const { foodNominations, isLoading } = useSelector(
    (state) => state.foodNominations
  );

  const foodList = foodNominations.filter(
    (foodNomination) => foodNomination?.status === "approved"
  );

  if (!foodList?.length && !isLoading) {
    return "No listed food";
  }

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid item xs={12} md={9} lg={10}>
      <Paper>
        {foodList.map((food, i) => (
          <div key={food._id}>
            <ApprovedFoodCard
              food={food}
              editInPopup={editInPopup}
              index={i + 1}
            />
            {i < foodList.length - 1 && <Divider />}
          </div>
        ))}
      </Paper>
    </Grid>
  );
};

export default ApprovedFoodCards;
