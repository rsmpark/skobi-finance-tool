import { FC, PropsWithChildren } from "react";

import "@assets/css/table.css";

import MuiBox from "@mui/material/Box";

import Header from "@components/table/header/Header";
import Row from "@components/table/row/Row";
import { HeadersProps, RowsProps } from "@components/table/Table.types";

const Headers = <T,>(props: HeadersProps<T>) => {
  const { table } = props;
  return table.getHeaderGroups().map((headerGroup) => (
    <div key={headerGroup.id} className="tr">
      {headerGroup.headers.map((header) => (
        <Header
          headerData={header}
          key={header.id}
          type={header.column.columnDef.meta?.inputAttr?.type ?? "text"}
        />
      ))}
    </div>
  ));
};

const Rows = <T,>(props: RowsProps<T>) => {
  const { table, meta } = props;
  return table
    .getRowModel()
    .rows.map((row) => <Row<T> rowData={row} key={row.id} meta={meta} />);
};

const Actions: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiBox display="flex" justifyContent="space-between">
      {children}
    </MuiBox>
  );
};

const Table: FC<PropsWithChildren<{ style: React.CSSProperties | undefined }>> & {
  Headers: typeof Headers;
  Rows: typeof Rows;
  Actions: typeof Actions;
} = ({ children, style }) => {
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
