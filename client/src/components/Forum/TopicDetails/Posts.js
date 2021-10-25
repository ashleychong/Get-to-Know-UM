import { useSelector } from "react-redux";
import { CircularProgress, Typography, Divider, Grid } from "@material-ui/core";

import React from "react";
import Post from "./Post";

const Posts = ({ editInPopup, topicId }) => {
  const { isLoading } = useSelector((state) => state.topics);
  const posts = useSelector((state) => state.topics.posts[topicId]);

  if (!posts?.length && !isLoading) {
    return (
      <>
        <Divider style={{ margin: "20px 0" }} />
        <div>
          <Typography variant="h6" style={{ fontWeight: 400 }} align="center">
            This topic does not have any posts yet.
          </Typography>
        </div>
      </>
    );
  }

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div>
      {posts?.map((post) => (
        <div key={post._id}>
          <Divider style={{ margin: "20px 0" }} />
          <Grid>
            <Post editInPopup={editInPopup} topicId={topicId} post={post} />
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Posts;
