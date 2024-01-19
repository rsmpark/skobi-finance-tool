import { faker } from "@faker-js/faker";

export function shortId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 95%, 90%)`;
}

export default function makeData(count: number) {
  let data = [];
  for (let i = 0; i < count; i++) {
    let row = {
      ID: faker.string.uuid(),
      name: faker.person.firstName(),
      mon: faker.number.int({ min: 0, max: 10 }),
      tue: faker.number.int({ min: 0, max: 10 }),
      wed: faker.number.int({ min: 0, max: 10 }),
      thu: faker.number.int({ min: 0, max: 10 }),
      fri: faker.number.int({ min: 0, max: 10 }),
      sat: faker.number.int({ min: 0, max: 10 }),
      sun: faker.number.int({ min: 0, max: 10 }),
    };

    data.push(row);
  }

  let columns = [
    {
      id: "name",
      label: "Name",
      accessor: "name",
      minWidth: 100,
      dataType: "text",
      options: [],
    },
    {
      id: "mon",
      label: "Mon",
      accessor: "mon",
      width: 80,
      dataType: "number",
      options: [],
    },
    {
      id: "tue",
      label: "Tue",
      accessor: "tue",
      width: 80,
      dataType: "number",
      options: [],
    },
    {
      id: "wed",
      label: "Wed",
      accessor: "wed",
      width: 80,
      dataType: "number",
      options: [],
    },
    {
      id: "thu",
      label: "Thu",
      accessor: "thu",
      width: 80,
      dataType: "number",
      options: [],
    },
    {
      id: "fri",
      label: "Fri",
      accessor: "fri",
      width: 80,
      dataType: "number",
      options: [],
    },
    {
      id: "sat",
      label: "Sat",
      accessor: "sat",
      width: 80,
      dataType: "number",
      options: [],
    },
    {
      id: "sun",
      label: "Sun",
      accessor: "sun",
      width: 80,
      dataType: "number",
      options: [],
    },
  ];
  return { columns: columns, data: data, skipReset: false };
}
