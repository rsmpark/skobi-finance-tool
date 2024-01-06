import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

const OwnerItem = () => {
  return (
    <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
      <MuiBox>
        <MuiTypography color="primary.contrastText">Owner</MuiTypography>
      </MuiBox>
      <MuiTypography variant="h4" color="text.secondary">
        $1000
      </MuiTypography>
    </MuiStack>
  );
};

export default OwnerItem;
