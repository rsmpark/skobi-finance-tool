import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";

import {
  ActionProps,
  ItemLabelProps,
  ItemResultProps,
  TipSummaryCardComponent,
} from "../../features/tipSummary/TipSummary.types";

const TipSummaryCard: TipSummaryCardComponent = ({ children }) => {
  return (
    <MuiStack
      spacing={3}
      justifyContent="space-between"
      sx={{ p: 4, width: "400px", bgcolor: "primary.dark", borderRadius: 3 }}
    >
      {children}
    </MuiStack>
  );
};

const List: FC<PropsWithChildren> = ({ children }) => {
  return <MuiStack spacing={5}>{children}</MuiStack>;
};

const ListItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
      {children}
    </MuiStack>
  );
};

const ItemLabel: FC<ItemLabelProps> = ({ label, rounded }) => {
  const RoundedLabel = () => (
    <MuiTypography variant="body2" color="text.disabled">
      Rounded
    </MuiTypography>
  );

  return (
    <MuiBox>
      <MuiTypography color="primary.contrastText">{label}</MuiTypography>
      {rounded ? <RoundedLabel /> : null}
    </MuiBox>
  );
};

const ItemResult: FC<ItemResultProps> = ({ value, flooredValue, rounded }) => {
  const FlooredResult = () => (
    <MuiTypography variant="body2" color="text.secondary" textAlign="end">
      ${flooredValue}
    </MuiTypography>
  );

  return (
    <MuiBox>
      <MuiTypography variant="h4" color="text.secondary">
        ${value}
      </MuiTypography>
      {rounded ? <FlooredResult /> : null}
    </MuiBox>
  );
};

const Action: FC<ActionProps> = ({ handleCalculate, handleReset }) => {
  return (
    <MuiBox display="flex" justifyContent="space-between">
      <MuiButton
        type="reset"
        variant="contained"
        // disabled={!bill && !tip && !people}
        sx={{ color: "primary.dark", bgcolor: "primary.main", flexGrow: 1, mx: 1 }}
        onClick={handleCalculate}
      >
        Calculate
      </MuiButton>
      <MuiButton
        type="reset"
        variant="contained"
        // disabled={!bill && !tip && !people}
        sx={{ color: "primary.dark", bgcolor: "primary.main", mx: 1, px: 3 }}
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
TipSummaryCard.Action = Action;

export default TipSummaryCard;
