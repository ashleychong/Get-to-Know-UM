/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import useStyles from "./style";
import { getEvents,getFavEvents,getThisMonthEvents } from '../../actions/events';

const Paginate = ({ page,refresh }) => {
  const { numberOfPages, events } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const classes = useStyles();
  const checkFavPage = window.location.href.includes("fav");
  const checkMonthPage = window.location.href.includes("month");

  useEffect(() => {
    if (page) {
      if(checkFavPage){
        dispatch(getFavEvents(page));
      }else if(checkMonthPage){
        dispatch(getThisMonthEvents(page));
      }
      else{
      dispatch(getEvents(page));
      }
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
        <PaginationItem {...item} component={Link} to={checkFavPage? `/event/fav?page=${item.page}`:checkMonthPage?`/event/month?page=${item.page}`:`/event?page=${item.page}`} />
      )}
    />
  )
};

export default Paginate;
