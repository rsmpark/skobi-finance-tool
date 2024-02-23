import { FC } from "react";

import { faker } from "@faker-js/faker";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import Cell from "@components/table/cell/Cell";
import { HeaderCell } from "@components/table/header/Header";
import {
  HallTipCalculationData,
  HallTipSummaryData,
} from "@components/table/Table.types";

export const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;

const hallTipCalculationColumnHelper = createColumnHelper<HallTipCalculationData>();
const hallTipSummaryColumnHelper = createColumnHelper<HallTipSummaryData>();

const generateDayColumns = () => {
  return days.map((day) =>
    hallTipCalculationColumnHelper.accessor(day, {
      cell: Cell as FC<CellContext<HallTipCalculationData, string | number | undefined>>,
      header: HeaderCell<HallTipCalculationData>,
      size: 120,
      meta: {
        inputAttr: {
          placeholder: "0",
          type: "number",
          min: 0,
        },
      },
    })
  );
};
export const hallTipCalculationColumns = [
  hallTipCalculationColumnHelper.accessor("name", {
    cell: Cell as FC<CellContext<HallTipCalculationData, string | number | undefined>>,
    header: HeaderCell<HallTipCalculationData>,
    size: 200,
    meta: {
      inputAttr: {
        placeholder: "Name",
        type: "text",
      },
    },
  }),
  ...generateDayColumns(),
];

export const hallTipSummaryColumns = [
  hallTipSummaryColumnHelper.accessor("name", {
    cell: Cell as FC<CellContext<HallTipSummaryData, string | number | undefined>>,
    header: HeaderCell<HallTipSummaryData>,
    size: 200,
    meta: {
      inputAttr: {
        placeholder: "Name",
        type: "text",
      },
    },
  }),
  hallTipSummaryColumnHelper.accessor("tips", {
    cell: Cell as FC<CellContext<HallTipSummaryData, string | number | undefined>>,
    header: HeaderCell<HallTipSummaryData>,
    size: 200,
    meta: {
      inputAttr: {
        placeholder: "Tips",
        type: "text",
      },
    },
  }),
];

export const makeHallCalculationTableData = (count: number): HallTipCalculationData[] => {
  const data: HallTipCalculationData[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      name: faker.person.firstName(),
      mon: faker.number.int({ min: 0, max: 1 }),
      tue: faker.number.int({ min: 0, max: 1 }),
      wed: faker.number.int({ min: 0, max: 1 }),
      thu: faker.number.int({ min: 0, max: 1 }),
      fri: faker.number.int({ min: 0, max: 1 }),
      sat: faker.number.int({ min: 0, max: 1 }),
      sun: faker.number.int({ min: 0, max: 1 }),
    });
  }
  return data;
};

export const getRowHours = (row: HallTipCalculationData) => {
  return days.reduce((acc, day) => acc + (row[day] ?? 0), 0);
};
