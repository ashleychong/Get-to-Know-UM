import {
  Paper,
  Toolbar,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./styles";
import PageHeader from "./../PageHeader";
import Custom from "../Custom/Custom";
import PopUp from "./PopUp";
import Topics from "./Topics";
import { getTopics, getTopicsBySearch } from "../../actions/topics";
import Pagination from "./ForumPagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Forum = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    if (searchQuery) {
      dispatch(getTopicsBySearch({ search: searchQuery }));
    }
    // else {
    //   dispatch(getTopics());
    // }
  }, [dispatch]);

  const searchTopic = () => {
    if (search.trim()) {
      dispatch(getTopicsBySearch({ search }));
      history.push(`/topics/search?searchQuery=${search}`);
    } else {
      history.push("/forum");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchTopic();
    }
  };

  const editInPopup = (topic) => {
    setCurrentId(topic._id);
    setOpenPopup(true);
  };

  return (
    <>
      <CssBaseline />
      <PageHeader title="Forum">
        <Custom.SearchBar
          placeholder="Search..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </PageHeader>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Paper className={classes.pageContent}>
            <Toolbar>
              <Typography variant="h6" component="div">
                Topics
              </Typography>
              <Custom.Button
                text="Create topic"
                variant="outlined"
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => {
                  setOpenPopup(true);
                }}
              />
            </Toolbar>
            <Topics editInPopup={editInPopup} />
            <PopUp
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
            {!searchQuery && (
              <div className={classes.pagination}>
                <Pagination page={page} />
              </div>
            )}
          </Paper>
        </Grid>
        {/* <Grid item md={3} lg={3} xl={3}>
                <Paper>
                    <Typography>Space</Typography>
                </Paper>    
            </Grid> */}
      </Grid>
    </>
  );
};

export default Forum;
