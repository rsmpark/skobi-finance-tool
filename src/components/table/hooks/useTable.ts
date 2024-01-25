import { useState } from "react";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { HallTipSummaryData } from "@components/table/Table.types";
import { makeData, columns } from "@util/table.util";

const useTable = () => {
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
      removeRow: (rowIndex: number) => {
        const setFilterFunc = (old: HallTipSummaryData[]) =>
          old.filter((_row: HallTipSummaryData, index: number) => index !== rowIndex);
        setData(setFilterFunc);
      },
    },
  });

  return { table, data };
};

export default useTable;
