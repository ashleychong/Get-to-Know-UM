import React, { useState } from "react";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { AppBar, TextField, InputAdornment, SvgIcon } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { getClubsBySearch } from "../../../actions/clubs";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const searchEvent = () => {
    if (search.trim()) {
      dispatch(getClubsBySearch({ search }));
      history.push(`/club/search?searchQuery=${search}`);
    } else {
      history.push("/");
    }
  };

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
