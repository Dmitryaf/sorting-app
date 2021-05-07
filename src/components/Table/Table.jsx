import React from "react";
import getData from "../../api/api";

import Search from "../Search/Search";
import "./Table.scss";

function Table() {
  console.log(getData());
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__tr">
          <td className="table__td table__td_center">
            <Search />
          </td>
          <td className="table__td table__td_center">
            <h3>Избранные</h3>
          </td>
        </tr>
      </thead>
    </table>
  );
}

export default Table;
