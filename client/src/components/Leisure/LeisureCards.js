import { useSelector } from "react-redux";
import { CircularProgress, Typography } from "@material-ui/core";

import LeisureCard from "./LeisureCard";

const LeisureCards = () => {
  const { leisures, isLoading } = useSelector((state) => state.leisures);

  if (!leisures?.length && !isLoading) {
    return "No listed Leisure";
  }

  return isLoading ? (
    <CircularProgress />
  ) : (
    leisures.map((leisure) => (
      <LeisureCard key={leisure._id} leisure={leisure} />
    ))
  );
};

export default LeisureCards;
