import { useSelector } from "react-redux";
import { CircularProgress, Grid, Paper, Divider } from "@material-ui/core";

import FoodCard from "./FoodCard";

const FoodCards = () => {
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
      <Grid container>
        <Grid item md={1} lg={2}></Grid>
        {/* <Grid item xs={12} md={9} lg={8}> */}
        <Grid item xs={12} md={10} lg={8}>
          <Paper>
            {[]
              .concat(foodList)
              .sort((a, b) => (a.votes.length > b.votes.length ? -1 : 1))
              .map((food, i) => (
                <div key={food._id}>
                  <FoodCard food={food} index={i + 1} />
                  {i < foodList.length - 1 && <Divider />}
                </div>
              ))}
          </Paper>
        </Grid>
        <Grid item md={1} lg={2}></Grid>
      </Grid>
    );
};

export default FoodCards;