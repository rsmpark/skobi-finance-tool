import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

const KitchenTipItem = () => {
  return (
    <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
      <MuiBox>
        <MuiTypography color="primary.contrastText">Kitchen Tip</MuiTypography>
        <MuiTypography variant="body2" color="text.disabled">
          Rounded
        </MuiTypography>
      </MuiBox>
      <MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          $1000.90
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary" textAlign="end">
          $1000
        </MuiTypography>
      </MuiBox>
    </MuiStack>
  );
};

export default KitchenTipItem;
