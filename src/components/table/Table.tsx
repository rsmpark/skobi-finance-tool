import DeleteIcon from "@mui/icons-material/Delete";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";

import "./table.css";
import { makeData, columns } from "@util/table.util";

import AddIcon from "./icons/AddIcon";
import { HallTipSummaryData } from "./Table.types";
import Row from "./row/Row";

export default function Table() {
  const [data, setData] = useState(makeData(5));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: string, value: string | number) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
      addRow: () => {
        const newRow: HallTipSummaryData = {
          name: "",
          mon: 0,
          tue: 0,
          wed: 0,
          thu: 0,
          fri: 0,
          sat: 0,
          sun: 0,
        };
        const setFunc = (old: HallTipSummaryData[]) => [...old, newRow];
        setData(setFunc);
      },
    },
  });

  const meta = table.options.meta;
  const headers = table.getFlatHeaders();
  /**
   * Instead of calling `column.getSize()` on every render for every header
   * and especially every data cell (very expensive),
   * we will calculate all column sizes at once at the root table level in a useMemo
   * and pass the column sizes down as CSS variables to the <table> element.
   */
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
    return table.getRowModel().rows.map((row) => <Row rowData={row} key={row.id} />);
  };

  return (
    <div className="p-2">
      <div className="table" style={{ ...columnSizeVars }}>
        <div>
          {table.getHeaderGroups().map((headerGroup) => (
            <div key={headerGroup.id} className="tr">
              {headerGroup.headers.map((header) => (
                <div
                  {...{
                    key: header.id,
                    className: "th noselect",
                    style: {
                      width: `calc(var(--header-${header?.id}-size) * 1px)`,
                    },
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <Rows />
        </div>
      </div>
      <div className="tr add-row" onClick={meta?.addRow}>
        <span className="svg-icon svg-gray" style={{ marginRight: 4 }}>
          <AddIcon />
        </span>
        New
      </div>
      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </div>
  );
}
