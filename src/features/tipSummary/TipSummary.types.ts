import { FC, PropsWithChildren } from "react";

import { ReceiptInfoState } from "../receiptInfo/ReceiptInfo.types";

export interface ItemLabelProps {
  label: string;
  rounded?: boolean;
}
export interface ItemResultProps {
  value: number;
  flooredValue?: number;
  rounded?: boolean;
}

export interface ActionProps {
  handleCalculate: () => void;
  handleReset: () => void;
}

interface TipSummaryCardProps {
  // receiptInfo: ReceiptInfo;
}

export interface TipSummaryCardComponent
  extends FC<PropsWithChildren<TipSummaryCardProps>> {
  List: FC<PropsWithChildren>;
  ListItem: FC<PropsWithChildren>;
  ItemLabel: FC<ItemLabelProps>;
  ItemResult: FC<ItemResultProps>;
  Action: FC<ActionProps>;
}
