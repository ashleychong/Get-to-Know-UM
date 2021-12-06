import { useSelector } from "react-redux";
import { CircularProgress, Typography, Divider, Grid } from "@material-ui/core";

import Review from "./Review";
const Reviews = ({ editInPopup, courseId }) => {
  const { isLoading } = useSelector((state) => state.courses);
  const reviews = useSelector((state) => state.courses.reviews[courseId]);

  if (!reviews?.length && !isLoading) {
    return (
      <div>
        <Typography
          variant="h6"
          style={{ fontWeight: 400, paddingTop: "1rem" }}
          align="center"
        >
          There are no reviews here yet.
        </Typography>
      </div>
    );
  }
  return isLoading ? (
    <CircularProgress />
  ) : (
    <div>
      {reviews?.map((review) => (
        <div key={review._id}>
          <Divider style={{ margin: "20px 0" }} />
          <div>
            <Review editInPopup={editInPopup} courseId={courseId} review={review} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
