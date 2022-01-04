import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

import CafeCard from "./CafeCard";

const CafeCards = () => {
  const { cafes, isLoading } = useSelector((state) => state.cafes);

  if (!cafes.length && !isLoading) return "No cafes";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <>
      {cafes?.map((cafe) => (
        <Grid key={cafe._id} item xs={12} sm={6} md={4}>
          <CafeCard
            imgSrc={cafe.image}
            imgAlt={cafe.title}
            title={cafe.title}
            desc={cafe.description}
            pagePath={`/cafe/${cafe._id}`}
          />
        </Grid>
      ))}
    </>
  );
};

export default CafeCards;
