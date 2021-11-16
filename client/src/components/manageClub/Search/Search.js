import React, { useState } from "react";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { AppBar, TextField, InputAdornment, SvgIcon } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { getEventsBySearch } from "../../../actions/events";
import SearchIcon from "@material-ui/icons/Search";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const Search = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const searchEvent = () => {};

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchEvent();
    }
  };

  return (
    <div className={classes.appBarSearch}>
      <TextField
        className={classes.input}
        onKeyDown={handleKeyPress}
        name="search"
        variant="outlined"
        placeholder="Search Club"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
