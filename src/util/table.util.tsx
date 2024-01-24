import { faker } from "@faker-js/faker";
import { Typography } from "@mui/material";
import { createColumnHelper } from "@tanstack/react-table";

import Cell from "@components/table/cell/Cell";
import { HallTipSummaryData } from "@components/table/Table.types";

const DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;

const columnHelper = createColumnHelper<HallTipSummaryData>();

const generateDayColumns = () => {
  return DAYS.map((day) =>
    columnHelper.accessor(day, {
      cell: Cell,
      header: (info) => <Typography>{info.header.id.toUpperCase()}</Typography>,
      size: 100,
      meta: {
        placeholder: "0",
      },
    })
  );
};
export const columns = [
  columnHelper.accessor("name", {
    cell: Cell,
    header: (info) => <Typography>{info.header.id.toUpperCase()}</Typography>,
    size: 200,
    meta: {
      placeholder: "Name",
    },
  }),
  ...generateDayColumns(),
];

export const makeData = (count: number): HallTipSummaryData[] => {
  const data: HallTipSummaryData[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      name: faker.person.firstName(),
      mon: faker.number.int({ min: 0, max: 20 }),
      tue: faker.number.int({ min: 0, max: 20 }),
      wed: faker.number.int({ min: 0, max: 20 }),
      thu: faker.number.int({ min: 0, max: 20 }),
      fri: faker.number.int({ min: 0, max: 20 }),
      sat: faker.number.int({ min: 0, max: 20 }),
      sun: faker.number.int({ min: 0, max: 20 }),
    });
  }
  return data;
};
