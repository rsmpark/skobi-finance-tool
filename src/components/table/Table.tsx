import { FC } from "react";

import "@assets/css/table.css";

import MuiBox from "@mui/material/Box";

import AddButton from "@components/table/buttons/AddButton";
import CalculateButton from "@components/table/buttons/CalculateButton";
import ResetButton from "@components/table/buttons/ResetButton";
import Header from "@components/table/header/Header";
import Row from "@components/table/row/Row";
import {
  ActionsProps,
  HeadersProps,
  RowsProps,
  TableComponent,
} from "@components/table/Table.types";

const Rows: FC<RowsProps> = ({ table, meta }) => {
  return table
    .getRowModel()
    .rows.map((row) => <Row rowData={row} key={row.id} meta={meta} />);
};

const Headers: FC<HeadersProps> = ({ table }) => {
  return table.getHeaderGroups().map((headerGroup) => (
    <div key={headerGroup.id} className="tr">
      {headerGroup.headers.map((header) => (
        <Header
          headerData={header}
          key={header.id}
          type={header.column.columnDef.meta?.type ?? "text"}
        />
      ))}
    </div>
  ));
};

const Actions: FC<ActionsProps> = ({ meta, data }) => {
  return (
    <MuiBox display="flex" justifyContent="space-between">
      <AddButton onClick={() => meta?.addRow()} />
      <MuiBox display="flex" alignItems="center">
        <ResetButton onClick={() => meta?.resetData()} />
        <CalculateButton onClick={() => meta?.calculateData(data)} />
      </MuiBox>
    </MuiBox>
  );
};

const Table: TableComponent = ({ style, children }) => {
  return (
    <MuiBox px={5}>
      <div className="table" style={style}>
        {children}
      </div>
    </MuiBox>
  );
};

Table.Headers = Headers;
Table.Rows = Rows;
Table.Actions = Actions;

export default Table;
