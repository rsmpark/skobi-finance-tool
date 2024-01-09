import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

import { useTypedSelector } from "../../../app/store";
import { floorToDigit } from "../../../util/format.util";

const HallTipItem = () => {
  const value = useTypedSelector((state) => state.tipSummary.hallTip);
  const flooredValue = floorToDigit(value, 10);
  return (
    <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
      <MuiBox>
        <MuiTypography color="primary.contrastText">Hall Tip</MuiTypography>
      </MuiBox>
      <MuiTypography variant="h4" color="text.secondary">
        ${value}
      </MuiTypography>
      <MuiTypography variant="body2" color="text.secondary" textAlign="end">
        ${flooredValue}
      </MuiTypography>
    </MuiStack>
  );
};

export default HallTipItem;
