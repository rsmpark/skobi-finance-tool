import { FC, useMemo } from "react";

import "@assets/css/table.css";

import MuiBox from "@mui/material/Box";

import AddButton from "@components/table/buttons/AddButton";
import CalculateButton from "@components/table/buttons/CalculateButton";
import ResetButton from "@components/table/buttons/ResetButton";
import Header from "@components/table/header/Header";
import useTable from "@components/table/hooks/useTable";
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

const Table: TableComponent = () => {
  const { table, data } = useTable();

  const meta = table.options.meta;
  const headers = table.getFlatHeaders();

  const columnSizeVars = useMemo(() => {
    const colSizes: { [key: string]: number } = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]!;
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    }
    return colSizes;
  }, [headers]);

  if (!table || !meta) return null;

  return (
    <MuiBox px={5}>
      <div className="table" style={{ ...columnSizeVars }}>
        <Headers table={table} />
        <Rows table={table} meta={meta} />
        <Actions meta={meta} data={data} />
      </div>

      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </MuiBox>
  );
};

Table.Headers = Headers;
Table.Rows = Rows;
Table.Actions = Actions;

export default Table;
