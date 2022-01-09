/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import useStyles from "./style";
import { getClubs } from '../../actions/clubs';

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.clubs);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getClubs(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination 
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      shape="rounded"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/club?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;
