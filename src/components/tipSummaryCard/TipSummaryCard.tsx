import { FC, PropsWithChildren } from "react";

import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

import {
  ActionsProps,
  ItemLabelProps,
  ItemResultProps,
  TipSummaryCardComponent,
} from "@features/tipSummary/TipSummary.types";
import { formatToCurrency } from "@util/format.util";

const TipSummaryCard: TipSummaryCardComponent = ({ children }) => {
  return (
    <MuiStack
      spacing={3}
      justifyContent="space-between"
      sx={{ p: 4.5, width: "400px", bgcolor: "primary.dark", borderRadius: 3 }}
    >
      {children}
    </MuiStack>
  );
};

const List: FC<PropsWithChildren> = ({ children }) => {
  return <MuiStack spacing={5}>{children}</MuiStack>;
};

const ListItem: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <MuiStack
      direction="row"
      justifyContent="space-between"
      alignItems={"center"}
      {...props}
    >
      {children}
    </MuiStack>
  );
};

const ItemLabel: FC<ItemLabelProps> = ({ label, ...props }) => {
  return (
    <MuiTypography variant="h6" color="primary.contrastText" {...props}>
      {label}
    </MuiTypography>
  );
};

const ItemResult: FC<ItemResultProps> = ({ value, ...props }) => {
  return (
    <MuiTypography variant="h5" color="text.secondary" {...props}>
      {formatToCurrency(value)}
    </MuiTypography>
  );
};

const Actions: FC<ActionsProps> = ({ handleCalculate, handleReset, disabled }) => {
  return (
    <MuiBox display="flex" justifyContent="space-between">
      <MuiButton
        type="button"
        variant="contained"
        disabled={disabled}
        sx={{ flexGrow: 1, mx: 1 }}
        onClick={handleCalculate}
      >
        Calculate
      </MuiButton>
      <MuiButton
        type="reset"
        variant="contained"
        sx={{ mx: 1, px: 3 }}
        onClick={handleReset}
      >
        Reset
      </MuiButton>
    </MuiBox>
  );
};

TipSummaryCard.List = List;
TipSummaryCard.ListItem = ListItem;
TipSummaryCard.ItemLabel = ItemLabel;
TipSummaryCard.ItemResult = ItemResult;
TipSummaryCard.Actions = Actions;

export default TipSummaryCard;
