import { useSelector } from "react-redux";
import { Grid, CircularProgress, Divider, Container, Typography, } from "@material-ui/core";

import Topic from "./Topic/Topic";

const Topics = ({ editInPopup }) => {
  const { topics, isLoading } = useSelector((state) => state.topics);

  if (!topics.length && !isLoading) {
    return (
      <div style={{ margin: "20px", textAlign: "center" }}>
        <Typography variant="h6">
          No topics found.
        </Typography>
      </div>
    );
  }

  return isLoading ? (
    <CircularProgress />
  ) : (
    <>
      {topics?.map((topic) => (
        <Container key={topic._id}>
          <Divider style={{ margin: "20px 0" }} />
          <Grid key={topic._id}>
            <Topic topic={topic} editInPopup={editInPopup} />
          </Grid>
        </Container>
      ))}
    </>
  );
};

export default Topics;
