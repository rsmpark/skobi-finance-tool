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

export type HallTipSummaryData = {
  name: string;
  mon: number | undefined;
  tue: number | undefined;
  wed: number | undefined;
  thu: number | undefined;
  fri: number | undefined;
  sat: number | undefined;
  sun: number | undefined;
};

export type ActionButtonProps = {
  onClick: () => void;
};

export type HeaderProps = {
  headerData: Header<HallTipSummaryData, unknown>;
  type: string;
};

export type RowProps = {
  rowData: Row<HallTipSummaryData>;
  meta?: TableMeta<HallTipSummaryData>;
};

export type RowsProps = {
  table: Table<HallTipSummaryData>;
  meta: TableMeta<HallTipSummaryData>;
};

export type HeadersProps = {
  table: Table<HallTipSummaryData>;
};

export type ActionsProps = {
  meta: TableMeta<HallTipSummaryData>;
  data: HallTipSummaryData[];
};

export interface TableComponent extends FC<PropsWithChildren> {
  Headers: FC<HeadersProps>;
  Rows: FC<RowsProps>;
  Actions: FC<PropsWithChildren<ActionsProps>>;
}
