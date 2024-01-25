import { useMemo } from "react";

import "./table.css";

import AddButton from "@components/table/buttons/AddButton";
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
          <Header headerData={header} key={header.id} />
        ))}
      </div>
    ));
  };

  return (
    <div className="p-2">
      <div className="table" style={{ ...columnSizeVars }}>
        <div>
          <Headers />
        </div>
        <div>
          <Rows />
        </div>
      </div>
      <AddButton onClick={() => meta?.addRow()} />
      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </div>
  );
}
