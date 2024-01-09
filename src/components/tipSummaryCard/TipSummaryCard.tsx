import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";

import { useAppDispatch } from "../../app/store";
import { ParsedReceiptInfo } from "../../features/receiptInfo/ReceiptInfo.types";
import { calculateTips } from "../../features/tipSummary/slice/tipSummary.slice";
import {
  ItemLabelProps,
  ItemResultProps,
  TipSummaryCardComponent,
} from "../../features/tipSummary/TipSummary.types";
import { parseObjectValuesToNumber } from "../../util/format.util";

const TipSummaryCard: TipSummaryCardComponent = ({ receiptInfo, children }) => {
  const dispatch = useAppDispatch();
  const onCalculate = () => {
    // const parsedReceiptInfo = parseObjectValuesToNumber(
    //   receiptInfo
    // ) as ParsedReceiptInfo;

    // Dummy date
    // TODO: remove dummy data
    const parsedReceiptInfo = {
      salesReportTotal: 15769.13,
      netSales: 14300.47,
      tips: 2157.85,
      cash: 1350,
      giftCard: 0,
    };

    dispatch(calculateTips(parsedReceiptInfo));
  };

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

const Action: FC = () => {
  return (
    <MuiBox display="flex" justifyContent="space-between">
      <MuiButton
        type="reset"
        variant="contained"
        // disabled={!bill && !tip && !people}
        sx={{ color: "primary.dark", bgcolor: "primary.main", flexGrow: 1, mx: 1 }}
        // onClick={onCalculate}
      >
        Calculate
      </MuiButton>
      <MuiButton
        type="reset"
        variant="contained"
        // disabled={!bill && !tip && !people}
        sx={{ color: "primary.dark", bgcolor: "primary.main", mx: 1, px: 3 }}
        onClick={() => {}}
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
