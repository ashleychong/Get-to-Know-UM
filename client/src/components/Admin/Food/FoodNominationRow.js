import React from "react";
import Avatar from "@material-ui/core/Avatar";

const FoodNominationRow = ({ foodNomination, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <div>
          <a
            href={`/admin/food/${foodNomination._id}`}
            onClick={(e) => e.preventDefault()}
            className="font-weight-bold text-black"
            title="..."
          >
            {foodNomination.foodName}
          </a>
        </div>
      </td>
      <td>
        <Avatar variant="square" src={foodNomination.image} alt={foodNomination.name} />
      </td>
    </tr>
  );
};

export default FoodNominationRow;
