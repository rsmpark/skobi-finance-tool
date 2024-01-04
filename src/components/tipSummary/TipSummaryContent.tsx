import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";

const TipSummaryContent = () => {
  return (
    <MuiStack spacing={5}>
      <MuiStack direction="row" justifyContent="space-between">
        <MuiBox>
          <MuiTypography color="primary.contrastText">Owner</MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          $1000
        </MuiTypography>
      </MuiStack>

      <MuiStack direction="row" justifyContent="space-between">
        <MuiBox>
          <MuiTypography color="primary.contrastText">Total Tip</MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          $1000
        </MuiTypography>
      </MuiStack>
      <MuiStack direction="row" justifyContent="space-between">
        <MuiBox>
          <MuiTypography color="primary.contrastText">Hall Tip</MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          $1000
        </MuiTypography>
      </MuiStack>
      <MuiStack direction="row" justifyContent="space-between">
        <MuiBox>
          <MuiTypography color="primary.contrastText">Kitchen Tip</MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          $1000
        </MuiTypography>
      </MuiStack>
    </MuiStack>
  );
};

export default TipSummaryContent;
