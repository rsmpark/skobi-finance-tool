import MuiBox from "@mui/material/Box";

import HallTipCalculationTable from "@components/table/HallTipCalculationTable";
import Table from "@components/table/Table";

const HallTipSummary = () => {
  return (
    <MuiBox sx={{ width: "100%" }}>
      <HallTipCalculationTable />
    </MuiBox>
  );
};

export default HallTipSummary;
