import { useSelector } from "react-redux";
import { CircularProgress, Grid, Paper, Divider } from "@material-ui/core";

import FoodCard from "./FoodCard";

const FoodCards = () => {
    const { foodList, isLoading } = useSelector((state) => state.food);

    if (!foodList?.length && !isLoading) {
      return "No listed food";
    }

    return isLoading ? (
      <CircularProgress />
    ) : (
      <Grid item xs={12} md={9} lg={8.5}>
        <Paper>
          {foodList.map((food, i) => (
            <div key={food._id}>
              <FoodCard
                food={food}
                index={i + 1}
              />
              {i < foodList.length - 1 && <Divider />}
            </div>
          ))}
        </Paper>
      </Grid>
    );
};

export default FoodCards;