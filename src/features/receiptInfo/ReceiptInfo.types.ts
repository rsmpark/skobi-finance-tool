export interface ReceiptInfo {
  [key: string]: string;
  salesReportTotal: string;
  netSales: string;
  tips: string;
  cash: string;
  giftCard: string;
}

export type ParsedReceiptInfo = {
  [K in keyof ReceiptInfo as string extends K ? never : K]: number;
};
