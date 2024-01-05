import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import MuiStack from "@mui/material/Stack";

import TipSummaryContent from "./TipSummaryContent";

const TipSummary = () => {
  return (
    <MuiStack
      spacing={3}
      justifyContent="space-between"
      sx={{ p: 4, width: "400px", bgcolor: "primary.dark", borderRadius: 3 }}
    >
      <TipSummaryContent />

      <MuiBox display="flex" justifyContent="space-between">
        <MuiButton
          type="reset"
          variant="contained"
          // disabled={!bill && !tip && !people}
          sx={{ color: "primary.dark", bgcolor: "primary.main", flexGrow: 1, mx: 1 }}
          // onClick={handleReset}
        >
          Calculate
        </MuiButton>
        <MuiButton
          type="reset"
          variant="contained"
          // disabled={!bill && !tip && !people}
          sx={{ color: "primary.dark", bgcolor: "primary.main", mx: 1, px: 3 }}
          // onClick={handleReset}
        >
          Reset
        </MuiButton>
      </MuiBox>
    </MuiStack>
  );
};

export default TipSummary;
