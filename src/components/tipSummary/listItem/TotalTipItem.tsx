import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

import { useTypedSelector } from "../../../app/store";

const TotalTipItem = () => {
  const value = useTypedSelector((state) => state.tipSummary.totalTip);
  return (
    <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
      <MuiBox>
        <MuiTypography color="primary.contrastText">Total Tip</MuiTypography>
      </MuiBox>
      <MuiTypography variant="h4" color="text.secondary">
        ${value}
      </MuiTypography>
    </MuiStack>
  );
};

export default TotalTipItem;
