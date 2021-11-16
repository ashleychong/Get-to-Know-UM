/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import useStyles from "./style";
import { getEvents } from '../../actions/events';

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getEvents(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination 
      hidePrevButton 
      hideNextButton
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      shape="rounded"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/event?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;
