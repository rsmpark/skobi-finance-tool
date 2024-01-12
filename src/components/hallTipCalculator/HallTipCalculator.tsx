import MuiPaper from "@mui/material/Paper";
import MuiStack from "@mui/material/Stack";

import HallTipSummary from "@features/hallTipSummary/HallTipSummary";

const HallTipCalculator = () => {
  return (
    <MuiPaper
      component="form"
      elevation={1}
      sx={{ maxWidth: 800, padding: 4, borderRadius: 4 }}
    >
      <MuiStack direction={{ xs: "column", md: "row" }} spacing={5}>
        <HallTipSummary />
      </MuiStack>
    </MuiPaper>
  );
};

export default HallTipCalculator;
