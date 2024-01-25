import { Row, TableMeta } from "@tanstack/react-table";

declare module "@tanstack/table-core" {
  interface TableMeta<TData> {
    updateData: (rowIndex: number, columnId: string, value: string | number) => void;
    addRow: () => void;
    removeRow: (rowIndex: number) => void;
  }

  interface ColumnMeta<TData, TValue> {
    placeholder: string;
  }
}

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

export type AddButtonProps = {
  onClick: () => void;
};

export type RowProps = {
  rowData: Row<HallTipSummaryData>;
  meta?: TableMeta<HallTipSummaryData>;
};
