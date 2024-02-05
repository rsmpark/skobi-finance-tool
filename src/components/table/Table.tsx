import { useMemo } from "react";

import "@assets/css/table.css";

import MuiBox from "@mui/material/Box";

import AddButton from "@components/table/buttons/AddButton";
import CalculateButton from "@components/table/buttons/CalculateButton";
import ResetButton from "@components/table/buttons/ResetButton";
import Header from "@components/table/header/Header";
import useTable from "@components/table/hooks/useTable";
import Row from "@components/table/row/Row";

export default function Table() {
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

  const Rows = () => {
    return table
      .getRowModel()
      .rows.map((row) => <Row rowData={row} key={row.id} meta={meta} />);
  };

  const Headers = () => {
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

  const Actions = () => {
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

  return (
    <MuiBox px={5}>
      <div className="table" style={{ ...columnSizeVars }}>
        <Headers />
        <Rows />
        <Actions />
      </div>

      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </MuiBox>
  );
}
