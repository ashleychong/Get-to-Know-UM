import React, { useState } from "react";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { AppBar, TextField } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { getEventsBySearch } from "../../../actions/events";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [search, setSearch] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getEventsBySearch({ search }));
      history.push(`/gtkum/event/search?searchQuery=${search || "none"}`);
    } else {
      history.push("/gtkum/event");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  return (
    <>
      <AppBar
        className={classes.appBarSearch}
        position="static"
        color="inherit"
      >
        <TextField
          onKeyDown={handleKeyPress}
          name="search"
          variant="outlined"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </AppBar>
    </>
  );
};

export default Search;
