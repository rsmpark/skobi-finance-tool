import MuiTypography from "@mui/material/Typography";

import TipSummaryCard from "@components/tipSummaryCard/TipSummaryCard";
import { selectTipPercentage } from "@features/tipSummary/state/tipSummary.selectors";
import { useTypedSelector } from "@store";

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
