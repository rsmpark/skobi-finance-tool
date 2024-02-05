import { useState } from "react";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { HallTipSummaryData } from "@components/table/Table.types";
import { makeData, columns, days } from "@util/table.util";

const useTable = () => {
  const [data, setData] = useState(makeData(5));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: string, value: string) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: columnId === "name" ? value : +value,
              };
            }
            return row;
          })
        );
      },
      resetData: () => {
        setData((old) =>
          old.map(() => {
            return {
              name: "",
              mon: undefined,
              tue: undefined,
              wed: undefined,
              thu: undefined,
              fri: undefined,
              sat: undefined,
              sun: undefined,
            };
          })
        );
      },
      addRow: () => {
        const newRow: HallTipSummaryData = {
          name: "",
          mon: undefined,
          tue: undefined,
          wed: undefined,
          thu: undefined,
          fri: undefined,
          sat: undefined,
          sun: undefined,
        };
        const setFunc = (old: HallTipSummaryData[]) => [...old, newRow];
        setData(setFunc);
      },
      removeRow: (rowIndex: number) => {
        const setFilterFunc = (old: HallTipSummaryData[]) =>
          old.filter((_row: HallTipSummaryData, index: number) => index !== rowIndex);
        setData(setFilterFunc);
      },
      calculateData: (data: HallTipSummaryData[]) => {
        const totalHours = data.reduce((hours, rowData: HallTipSummaryData) => {
          const serverHours = days.reduce((accHours, currDay) => {
            if (rowData !== undefined) {
              return accHours;
            } else {
              return rowData[currDay] + accHours;
            }
          }, 0);
          return hours + serverHours;
        }, 0);
      },
    },
  });

  return { table, data };
};

export default useTable;
