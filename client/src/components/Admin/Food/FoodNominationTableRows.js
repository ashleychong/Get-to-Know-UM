import {
  CircularProgress,
  Avatar,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const FoodNominationRows = () => {
  const { foodNominations, isLoading } = useSelector(
    (state) => state.foodNominations
  );


  if (!foodNominations?.length && !isLoading) {
    return "No nominated food";
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

  return (foodNominations?.map((foodNomination, index) => (
    <TableRow key={foodNomination._id}>
      <TableCell>{index}</TableCell>
      <TableCell>
        <Avatar
          variant="square"
          src={foodNomination.image}
          alt={foodNomination.name}
        />
      </TableCell>
      <TableCell>
        <a
          href={`/admin/foodNomination/${foodNomination._id}`}
          className="font-weight-bold text-black"
          title="..."
        >
          {foodNomination.foodName}
        </a>
      </TableCell>
    </TableRow>
  )));
};

export default FoodNominationRows;
