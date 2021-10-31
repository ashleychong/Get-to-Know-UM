import { useSelector } from "react-redux";
import { CircularProgress, Typography } from "@material-ui/core";

import LeisureCard from "./LeisureCard";

const LeisureCards = () => {
  const leisures = useSelector((state) => state.leisures);

  if (!leisures?.length) {
    return "No listed Leisure";
  }

  return leisures.map((leisure) => (
    <LeisureCard key={leisure._id} leisure={leisure} />
  ));
};

export default LeisureCards;
