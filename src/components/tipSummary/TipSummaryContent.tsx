import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

const TipSummaryContent = () => {
  return (
    <MuiStack spacing={5}>
      <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
        <MuiBox>
          <MuiTypography color="primary.contrastText">Owner</MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          $1000
        </MuiTypography>
      </MuiStack>

      <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
        <MuiBox>
          <MuiTypography color="primary.contrastText">Total Tip</MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          $1000
        </MuiTypography>
      </MuiStack>
      <MuiStack direction="row" justifyContent="space-between" alignItems={"center"}>
        <MuiBox>
          <MuiTypography color="primary.contrastText">Hall Tip</MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          $1000
        </MuiTypography>
      </MuiStack>
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
      <MuiStack direction="row" justifyContent="center">
        <MuiTypography variant="h6" color="text.disabled" padding={"0 4px"}>
          Tip:
        </MuiTypography>
        <MuiTypography variant="h6" color="text.disabled" padding={"0 4px"}>
          12.5%
        </MuiTypography>
      </MuiStack>
    </MuiStack>
  );
};

export default TipSummaryContent;
