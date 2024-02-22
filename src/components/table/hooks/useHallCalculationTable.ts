import { useState } from "react";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { useAppDispatch, useTypedSelector } from "@app/store";
import { HallTipSummaryData } from "@components/table/Table.types";
import { updateHallTipSummary } from "@features/hallTipSummary/state/hallTipSummary.slice";
import { selectHallTip } from "@features/tipSummary/state/tipSummary.selectors";
import { makeData, columns, getRowHours } from "@util/table.util";
import { calculateHallTips } from "@util/tip.util";

const useHallTipCalculationTable = () => {
  const [data, setData] = useState(makeData(5));
  const dispatch = useAppDispatch();
  const hallTotalTip = useTypedSelector(selectHallTip);

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
        const hallDataList: { name: string; hours: number }[] = [];

        const totalHours = data.reduce((hours, rowData: HallTipSummaryData) => {
          const rowHours = getRowHours(rowData);
          hallDataList.push({ name: rowData.name, hours: rowHours });
          return hours + rowHours;
        }, 0);

        const hallTips = hallDataList.map((data) => {
          // TODO: replace 100 with the hall total tips
          const tip = calculateHallTips(100, totalHours, data.hours);
          return { name: data.name, tip };
        });

        dispatch(updateHallTipSummary({ hallTipSummary: hallTips }));
      },
    },
  });

  return { table, data };
};

export default useHallTipCalculationTable;
