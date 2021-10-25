import React, { useState } from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";
import ClubTable from "../ClubTable/Table";
import ClubForm from "../ClubForm/Form";
import Recruit from "../Recruitment/Recruit";
import Layout from "../../Layout";

const ClubTab = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "list",
    1: "details",
    2: "recruit",
  };

  const indexToTabName = {
    list: 0,
    details: 1,
    recruit: 2,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);
  const [currentId, setCurrentId] = useState(null);
  const handleChange = (club, newValue) => {
    history.push(`/club/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

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
        <Tab label="Recruitment" disabled />
      </Tabs>
      {selectedTab === 0 && <ClubTable setCurrentId={setCurrentId} />}
      {selectedTab === 1 && (
        <ClubForm currentId={currentId} setCurrentId={setCurrentId} />
      )}
      {selectedTab === 2 && <Recruit />}
      </Paper>
      </Layout>
  );
};

export default ClubTab;
