import React, { useState, useEffect } from "react";
import {
  Paper,
  Toolbar,
  CssBaseline,
  Grid,
  Typography,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Search, Add } from "@material-ui/icons";

import useStyles from "./ForumStyles";
import PageHeader from "./../PageHeader";
import Custom from "../Custom/Custom";
import PopUp from "./PopUp";
import Topics from "./Topics";
import { getTopics, getTopicTags, getTopicsBySearch } from "../../actions/topics";
import Pagination from "./ForumPagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Forum = () => {
  const classes = useStyles();
  const { tags: tagOptions } = useSelector((state) => state.topics);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const tagsQuery = query.get("tags");
  const [searchTags, setSearchTags] = useState([]);

  useEffect(() => {
    dispatch(getTopicTags());
    
    if (searchQuery || tagsQuery) {
      // console.log("url search query");
      // console.log(searchQuery);
      // console.log(tagsQuery);
      dispatch(getTopicsBySearch({ search: searchQuery, tags: tagsQuery }));
    } else {
      // console.log("no search query");
      dispatch(getTopics());
    }
  }, [dispatch]);

  const handleSearchTags = (event, value) => {
    setSearchTags(value);
  };

  const searchTopic = () => {
    if (search.trim() || searchTags.length) {
      // console.log(searchTags);
      dispatch(getTopicsBySearch({ search, tags: searchTags.join(",") }));
      
      history.push(
        `/forum/search?searchQuery=${search || "none"}&tags=${searchTags.join(",")}`
      );
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
      <PageHeader title="Forum"></PageHeader>
      <Grid container>
        <Grid item xs={12} sm={9} md={9} className={classes.topicsContainer}>
          <div className={classes.firstRow}>
            <Custom.Button
              text="New topic"
              variant="contained"
              startIcon={<Add />}
              onClick={() => {
                setOpenPopup(true);
              }}
            />
          </div>
          <Paper className={classes.topicsContent}>
            <Toolbar>
              <Grid container className={classes.searchRow}>
                <Grid item xs={12} md={8}>
                  <Custom.Input
                    fullWidth
                    label="Search by title"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyPress}
                    // InputProps={{
                    //   endAdornment: (
                    //     <InputAdornment position="end">
                    //       <IconButton onClick={searchTopic}>
                    //         <Search />
                    //       </IconButton>
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <div style={{ textAlign: "center",  }}>
                    <Custom.Button
                      text="Search"
                      fullWidth
                      variant="contained"
                      onClick={() => {
                        searchTopic();
                      }}
                      className={classes.searchButton}
                    />
                  </div>
                </Grid>
              </Grid>
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
      </Grid>
    </>
  );
};

export default Forum;
