import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";

import "./table.css";
import { makeData, columns } from "@util/table.util";

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
    },
  });

  /**
   * Instead of calling `column.getSize()` on every render for every header
   * and especially every data cell (very expensive),
   * we will calculate all column sizes at once at the root table level in a useMemo
   * and pass the column sizes down as CSS variables to the <table> element.
   */
  const columnSizeVars = useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes: { [key: string]: number } = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]!;
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    }
    return colSizes;
  }, [table.getState().columnSizingInfo]);

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
          {table.getRowModel().rows.map((row) => (
            <div key={row.id} className="tr">
              {row.getVisibleCells().map((cell) => (
                <div
                  {...{
                    key: cell.id,
                    className: "td",
                    style: {
                      width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
                    },
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <pre>{JSON.stringify(data, null, "\t")}</pre>
      <div className="h-4" />
    </div>
  );
}
