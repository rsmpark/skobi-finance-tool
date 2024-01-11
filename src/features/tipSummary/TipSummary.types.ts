import { TypographyProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";
export interface ItemLabelProps extends TypographyProps {
  label: string;
  rounded?: boolean;
}
export interface ItemResultProps extends TypographyProps {
  value: number;
  roundedValue?: number;
  rounded?: boolean;
}

export interface ActionsProps {
  handleCalculate: () => void;
  handleReset: () => void;
  disabled: boolean;
}

export interface TipSummaryCardComponent extends FC<PropsWithChildren> {
  List: FC<PropsWithChildren>;
  ListItem: FC<PropsWithChildren>;
  ItemLabel: FC<ItemLabelProps>;
  ItemResult: FC<ItemResultProps>;
  Actions: FC<ActionsProps>;
}
