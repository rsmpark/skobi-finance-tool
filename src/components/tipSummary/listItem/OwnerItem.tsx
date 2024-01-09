import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

import { useTypedSelector } from "../../../app/store";

const OwnerItem = () => {
  const value = useTypedSelector((state) => state.tipSummary.owner);
  return (
    <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
      <MuiBox>
        <MuiTypography color="primary.contrastText">Owner</MuiTypography>
      </MuiBox>
      <MuiTypography variant="h4" color="text.secondary">
        ${value}
      </MuiTypography>
    </MuiStack>
  );
};

export default OwnerItem;
