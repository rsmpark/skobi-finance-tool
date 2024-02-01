import { faker } from "@faker-js/faker";
import { createColumnHelper } from "@tanstack/react-table";

import Cell from "@components/table/cell/Cell";
import { HeaderCell } from "@components/table/header/Header";
import { HallTipSummaryData } from "@components/table/Table.types";

export const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;

const columnHelper = createColumnHelper<HallTipSummaryData>();

const generateDayColumns = () => {
  return days.map((day) =>
    columnHelper.accessor(day, {
      cell: Cell,
      header: HeaderCell,
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
export const columns = [
  columnHelper.accessor("name", {
    cell: Cell,
    header: HeaderCell,
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

export const makeData = (count: number): HallTipSummaryData[] => {
  const data: HallTipSummaryData[] = [];
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
