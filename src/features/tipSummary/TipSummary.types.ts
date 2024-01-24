import { FC, PropsWithChildren } from "react";

import { StackProps } from "@mui/material/Stack";
import { TypographyProps } from "@mui/material/Typography";
export interface ItemLabelProps extends TypographyProps {
  label: string;
  rounded?: boolean;
}
export interface ItemResultProps extends TypographyProps {
  value: number | string;
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
  ListItem: FC<PropsWithChildren<StackProps>>;
  ItemLabel: FC<ItemLabelProps>;
  ItemResult: FC<ItemResultProps>;
  Actions: FC<ActionsProps>;
}
