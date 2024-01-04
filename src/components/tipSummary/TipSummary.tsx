import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import MuiStack from "@mui/material/Stack";

import TipSummaryContent from "./TipSummaryContent";

const TipSummary = () => {
  return (
    <MuiStack
      spacing={3}
      justifyContent="space-between"
      sx={{ p: 4, width: "100%", bgcolor: "primary.dark", borderRadius: 3 }}
    >
      <TipSummaryContent />

      <MuiBox>
        <MuiButton
          type="reset"
          variant="contained"
          fullWidth
          // disabled={!bill && !tip && !people}
          sx={{ color: "primary.dark", bgcolor: "primary.main" }}
          // onClick={handleReset}
        >
          Reset
        </MuiButton>
      </MuiBox>
    </MuiStack>
  );
};

export default TipSummary;
