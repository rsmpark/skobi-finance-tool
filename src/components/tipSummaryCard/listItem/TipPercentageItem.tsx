import MuiTypography from "@mui/material/Typography";

import { useTypedSelector } from "../../../app/store";
import { selectTipPercentage } from "../../../features/tipSummary/state/tipSummary.selectors";
import TipSummaryCard from "../TipSummaryCard";

const TipPercentageItem = () => {
  const tipPercentage = useTypedSelector(selectTipPercentage);
  return (
    <TipSummaryCard.ListItem direction="row" justifyContent="center">
      <MuiTypography variant="h6" color="text.disabled" padding={"0 3px"}>
        Tip:
      </MuiTypography>
      <MuiTypography variant="h6" color="text.disabled" padding={"0 3px"}>
        {tipPercentage}%
      </MuiTypography>
    </TipSummaryCard.ListItem>
  );
};

export default TipPercentageItem;
