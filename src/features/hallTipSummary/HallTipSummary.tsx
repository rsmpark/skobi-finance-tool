import MuiBox from "@mui/material/Box";

import HallTipCalculationTable from "@components/table/HallTipCalculationTable";
import HallTipSummaryTable from "@components/table/HallTipSummaryTable";

const HallTipSummary = () => {
  return (
    <MuiBox sx={{ width: "100%" }}>
      <HallTipCalculationTable />
      <HallTipSummaryTable />
    </MuiBox>
  );
};

export default HallTipSummary;
