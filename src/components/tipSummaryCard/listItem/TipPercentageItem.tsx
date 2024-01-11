import MuiTypography from "@mui/material/Typography";

import TipSummaryCard from "../TipSummaryCard";

const TipPercentageItem = () => {
  return (
    <TipSummaryCard.ListItem direction="row" justifyContent="center">
      <MuiTypography variant="h6" color="text.disabled" padding={"0 3px"}>
        Tip:
      </MuiTypography>
      <MuiTypography variant="h6" color="text.disabled" padding={"0 3px"}>
        12.5%
      </MuiTypography>
    </TipSummaryCard.ListItem>
  );
};

export default TipPercentageItem;
