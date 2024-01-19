import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { useTable, useFlexLayout, useResizeColumns, useSortBy } from "react-table";

import Cell from "@components/table/cell/Cell";
import Header from "@components/table/header/Header";

import "./table.css";
import AddIcon from "./icons/AddIcon";
import clsx from "clsx";

const defaultColumn = {
  minWidth: 50,
  width: 150,
  maxWidth: 400,
  Cell: Cell,
  Header: Header,
  sortType: "alphanumericFalsyLast",
};

export default function Table({ columns, data, dispatch: dataDispatch, skipReset }) {
  const sortTypes = useMemo(
    () => ({
      alphanumericFalsyLast(rowA, rowB, columnId, desc) {
        if (!rowA.values[columnId] && !rowB.values[columnId]) {
          return 0;
        }

        if (!rowA.values[columnId]) {
          return desc ? -1 : 1;
        }

        if (!rowB.values[columnId]) {
          return desc ? 1 : -1;
        }

        return isNaN(rowA.values[columnId])
          ? rowA.values[columnId].localeCompare(rowB.values[columnId])
          : rowA.values[columnId] - rowB.values[columnId];
      },
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn,
      dataDispatch,
      autoResetSortBy: !skipReset,
      autoResetFilters: !skipReset,
      autoResetRowState: !skipReset,
      sortTypes,
    },
    useFlexLayout,
    useResizeColumns,
    useSortBy
  );

  function isTableResizing() {
    for (let headerGroup of headerGroups) {
      for (let column of headerGroup.headers) {
        if (column.isResizing) {
          return true;
        }
      }
    }

    return false;
  }

  return (
    <>
      <div
        {...getTableProps()}
        className={clsx("table", isTableResizing() && "noselect")}
      >
        <div>
          {headerGroups.map((headerGroup) => {
            return (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) =>
                  column.render("Header", { key: column.id })
                )}
              </div>
            );
          })}
        </div>
        <div {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render("Cell")}
                  </div>
                ))}
              </div>
            );
          })}
          <div className="tr add-row" onClick={() => dataDispatch({ type: "add_row" })}>
            <span className="svg-icon svg-gray" style={{ marginRight: 4 }}>
              <AddIcon />
            </span>
            <Typography variant="body2">New</Typography>
          </div>
        </div>
      </div>
    </>
  );
}
