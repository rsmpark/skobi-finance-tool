import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

const TipPercentageItem = () => {
  return (
    <MuiStack direction="row" justifyContent="center">
      <MuiTypography variant="h6" color="text.disabled" padding={"0 4px"}>
        Tip:
      </MuiTypography>
      <MuiTypography variant="h6" color="text.disabled" padding={"0 4px"}>
        12.5%
      </MuiTypography>
    </MuiStack>
  );
};

export default TipPercentageItem;
