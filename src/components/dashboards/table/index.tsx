import React from "react";
import { TableContainer, TableWrapper } from "./styles";
import Table from "./Table";
import { tableBodyData } from "@/data/tableBodyData";

const TableDashboard = () => {
  return (
    <TableContainer>
      <h1>Session History</h1>
      <TableWrapper>
        <Table data={tableBodyData} />
      </TableWrapper>
    </TableContainer>
  );
};

export default TableDashboard;
