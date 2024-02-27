import { FC, PropsWithChildren } from "react";

import { Header, Row, Table, TableMeta } from "@tanstack/react-table";

declare module "@tanstack/table-core" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData> {
    updateData: (rowIndex: number, columnId: string, value: string) => void;
    resetData: () => void;
    addRow: () => void;
    removeRow: (rowIndex: number) => void;
    calculateData: (data: TData[]) => void;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData, TValue> {
    inputAttr?: InputAttr;
    type?: string;
  }
}

export type InputAttr = {
  placeholder?: string;
  type?: string;
  min?: number;
};

export type HallTipCalculationData = {
  name: string;
  mon: number | undefined;
  tue: number | undefined;
  wed: number | undefined;
  thu: number | undefined;
  fri: number | undefined;
  sat: number | undefined;
  sun: number | undefined;
};

export type HallTipSummaryData = {
  name: string;
  tips: number;
};

export type ActionButtonProps = {
  onClick: () => void;
};

export type HeaderProps = {
  headerData: Header<HallTipCalculationData, unknown>;
  type: string;
};

export type RowProps = {
  rowData: Row<HallTipCalculationData>;
  meta?: TableMeta<HallTipCalculationData>;
};

export type RowGProps<T = unknown> = {
  rowData: Row<T>;
  meta?: TableMeta<T>;
};

// export type RowsProps = {
//   table: Table<HallTipCalculationData>;
//   meta: TableMeta<HallTipCalculationData>;
// };

export type RowsProps<T = unknown> = {
  table: Table<T>;
  meta: TableMeta<T>;
};

export type HeadersProps = {
  table: Table<HallTipCalculationData>;
};

export interface TableComponent<T>
  extends PropsWithChildren<{ style: React.CSSProperties | undefined }> {
  Headers: FC<HeadersProps>;
  Rows: FC<RowsProps<T>>;
  Actions: FC<PropsWithChildren>;
}
