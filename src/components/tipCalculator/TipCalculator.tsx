import MuiPaper from "@mui/material/Paper";
import MuiStack from "@mui/material/Stack";

import ReceiptInfo from "../../features/receiptInfo/ReceiptInfo";
import TipSummary from "../../features/tipSummary/TipSummary";

const TipCalculator = () => {
  return (
    <MuiPaper
      component="form"
      elevation={1}
      sx={{ maxWidth: 800, padding: 4, borderRadius: 4 }}
    >
      <MuiStack direction={{ xs: "column", md: "row" }} spacing={5}>
        <ReceiptInfo />
        {/* TODO: Fix TipSummary Props  */}
        <TipSummary
          receiptInfo={{
            salesReportTotal: "0",
            netSales: "0",
            tips: "0",
            cash: "0",
            giftCard: "0",
          }}
        >
          <TipSummary.Action />
        </TipSummary>
      </MuiStack>
    </MuiPaper>
  );
};

export default TipCalculator;
