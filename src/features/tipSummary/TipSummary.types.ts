import { FC, PropsWithChildren } from "react";

import { ReceiptInfo } from "../receiptInfo/ReceiptInfo.types";

export interface ItemLabelProps {
  label: string;
  rounded?: boolean;
}
export interface ItemResultProps {
  value: number;
  flooredValue: number;
  rounded?: boolean;
}

interface TipSummaryProps {
  receiptInfo: ReceiptInfo;
}

export interface TipSummaryComponent extends FC<PropsWithChildren<TipSummaryProps>> {
  List: FC<PropsWithChildren>;
  ListItem: FC<PropsWithChildren>;
  ItemLabel: FC<ItemLabelProps>;
  ItemResult: FC<ItemResultProps>;
  Action: FC;
}
