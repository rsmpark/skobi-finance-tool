export type ParsedReceiptInfo = {
  [K in keyof ReceiptInfoState as string extends K ? never : K]: number;
};

export interface ReceiptInfoState {
  [key: string]: string;
  salesReportTotal: string;
  netSales: string;
  tips: string;
  cash: string;
  giftCard: string;
}

export interface ReceiptInfoProps {
  receiptInfo: ReceiptInfoState;
  handleSetReceiptInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
