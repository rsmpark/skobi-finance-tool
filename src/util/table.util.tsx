import { faker } from "@faker-js/faker";
import { createColumnHelper } from "@tanstack/react-table";

export function shortId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 95%, 90%)`;
}

export type HallTipSummaryData = {
  ID: string;
  name: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
};

type Person = {
  name: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
};

export const makeData = (count: number): Person[] => {
  const data: Person[] = [];
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

const columnHelper = createColumnHelper<Person>();

export const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    size: 200,
  }),
  columnHelper.accessor("mon", {
    cell: (info) => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("tue", {
    cell: (info) => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("wed", {
    cell: (info) => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("thu", {
    cell: (info) => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("fri", {
    cell: (info) => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("sat", {
    cell: (info) => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("sun", {
    cell: (info) => info.getValue(),
    size: 100,
  }),
];
