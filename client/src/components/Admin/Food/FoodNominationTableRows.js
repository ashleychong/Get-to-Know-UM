import {
  CircularProgress,
  Avatar,
  TableCell,
  TableRow,
  Box,
  Typography,
  Link,
} from "@material-ui/core";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import moment from "moment";

import { SeverityPill } from './SeverityPill';

const FoodNominationRows = () => {
  const { foodNominations, isLoading } = useSelector(
    (state) => state.foodNominations
  );

  if (!foodNominations?.length && !isLoading) {
    return (
      <Box mx={2} my={3}>
        No nominated food yet.
      </Box>
    );
  }

  // return isLoading ? (
  //   <tr>
  //     <TableCell>
  //       <CircularProgress />
  //     </TableCell>
  //   </tr>
  // ) : (
  //   foodNominations?.map((foodNomination, index) => (
  //     <FoodNominationRow
  //       key={foodNomination._id}
  //       foodNomination={foodNomination}
  //       index={index}
  //     />
  //   ))
  // );

  // return (
  //   <tr><TableCell><CircularProgress/></TableCell></tr>
  // );

  return foodNominations?.map((foodNomination, index) => (
    <TableRow key={foodNomination?._id} hover>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        {/* <a
          href={`/admin/foodNomination/${foodNomination?._id}`}
          className="font-weight-bold text-black"
          title={foodNomination?.name}
        >
          {foodNomination?.foodName}
        </a> */}
        <Typography
          variant="subtitle2"
          component={Link}
          href={`/admin/foodNominations/${foodNomination?._id}`}
          underline="hover"
          color="textPrimary"
        >
          {foodNomination?.foodName}
        </Typography>
      </TableCell>
      <TableCell>
        <Avatar
          src={foodNomination?.image || "https://source.unsplash.com/random"}
          alt={foodNomination?.name}
        />
      </TableCell>
      <TableCell>
        <SeverityPill
          color={
            (foodNomination?.status === "approved" && "success") ||
            (foodNomination?.status === "declined" && "error") ||
            (foodNomination?.status === "pending" && "warning")
          }
        >
          {foodNomination?.status}
        </SeverityPill>
      </TableCell>
      <TableCell>
        {moment(foodNomination?.createdAt).format("DD MMM YYYY")}
      </TableCell>
    </TableRow>
  ));
};

export default FoodNominationRows;
