import MuiPaper from "@mui/material/Paper";
import MuiStack from "@mui/material/Stack";

import ReceiptInfo from "@features/receiptInfo/ReceiptInfo";
import TipSummary from "@features/tipSummary/TipSummary";

const TipCalculator = () => {
  return (
    <MuiPaper
      component="form"
      elevation={1}
      sx={{ maxWidth: 800, padding: 4, borderRadius: 4 }}
    >
      <MuiStack direction={{ xs: "column", md: "row" }} spacing={5}>
        <ReceiptInfo />
        <TipSummary />
      </MuiStack>
    </MuiPaper>
  );
};

export default TipCalculator;
