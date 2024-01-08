import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import MuiStack from "@mui/material/Stack";
import { FC } from "react";

import { calculateTips } from "./slice/tipSummary.slice";
import { TipSummaryProps } from "./TipSummary.types";
import TipSummaryContent from "./tipSummaryContent/TipSummaryContent";
import { useAppDispatch } from "../../app/store";
import { parseObjectValuesToNumber } from "../../util/format.util";
import { ParsedReceiptInfo } from "../receiptInfo/ReceiptInfo.types";

const TipSummary: FC<TipSummaryProps> = ({ receiptInfo }) => {
  const dispatch = useAppDispatch();
  const onCalculate = () => {
    // const parsedReceiptInfo = parseObjectValuesToNumber(
    //   receiptInfo
    // ) as ParsedReceiptInfo;

    // Dummy date
    // TODO: remove dummy data
    const parsedReceiptInfo = {
      salesReportTotal: 15769.13,
      netSales: 14300.47,
      tips: 2157.85,
      cash: 1350,
      giftCard: 0,
    };

    dispatch(calculateTips(parsedReceiptInfo));
  };

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
          onClick={onCalculate}
        >
          Calculate
        </MuiButton>
        <MuiButton
          type="reset"
          variant="contained"
          // disabled={!bill && !tip && !people}
          sx={{ color: "primary.dark", bgcolor: "primary.main", mx: 1, px: 3 }}
          onClick={() => {}}
        >
          Reset
        </MuiButton>
      </MuiBox>
    </MuiStack>
  );
};

export default TipSummary;
