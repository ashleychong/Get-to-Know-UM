import React, { useState, useEffect } from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";
import EventTable from "../EventTable/Table";
import EventForm from "../EventForm/Form";
import { useDispatch } from "react-redux";
import { getEvents } from "../../../actions/events";
import Layout from "../../Layout";

const EventTab = (props) => {
  const dispatch = useDispatch();
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "list",
    1: "details",
  };

  const indexToTabName = {
    list: 0,
    details: 1,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);
  const [currentId, setCurrentId] = useState(null);
  const handleChange = (event, newValue) => {
    history.push(`/event/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };
  useEffect(() => {
    dispatch(getEvents());
  }, [currentId, dispatch]);

  return (
    <Layout>
      <Paper>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="List" />
          <Tab label="Details" />
        </Tabs>
        {selectedTab == 0 ? (
          <EventTable setCurrentId={setCurrentId} />
        ) : (
          <EventForm currentId={currentId} setCurrentId={setCurrentId} />
        )}
      </Paper>
    </Layout>
  );
};

export default EventTab;
