import { RowData, TableMeta } from "@tanstack/react-table";

export type HallTipSummaryData = {
  name: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
};

// TODO: where to place declare module files
declare module "@tanstack/table-core" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: string | number) => void;
  }
}
