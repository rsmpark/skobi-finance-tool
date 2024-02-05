import { Header, Row, TableMeta } from "@tanstack/react-table";

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
