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

export type ActionType =
  | {
      type: "SET_SALES_REPORT_TOTAL";
      payload: string;
    }
  | {
      type: "SET_NET_SALES";
      payload: string;
    }
  | {
      type: "SET_TIPS";
      payload: string;
    }
  | {
      type: "SET_CASH";
      payload: string;
    }
  | {
      type: "SET_GIFT_CARD";
      payload: string;
    };

export interface ReceiptInfoProps {
  receiptInfo: ReceiptInfoState;
  handleSetReceiptInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
