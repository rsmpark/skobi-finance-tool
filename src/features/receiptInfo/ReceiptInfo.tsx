import MuiStack from "@mui/material/Stack";
import { useReducer } from "react";

import useReceiptInfo from "./hooks/useReceiptInfo";
import CurrencyInput from "../../components/currencyInput/CurrencyInput";

const ReceiptInfo = () => {
  const { state, dispatch } = useReceiptInfo();
  const { salesReportTotal, netSales, tips, cash, giftCard } = state;

  return (
    <MuiStack spacing={4} sx={{ width: "100%" }}>
      <CurrencyInput
        label="Sales Report Total"
        name="srt"
        value={salesReportTotal}
        setValue={(value) => dispatch({ type: "SET_SALES_REPORT_TOTAL", payload: value })}
        onBlur={(event) => {
          console.log("BLUR");
        }}
        onFocus={(event) => {
          console.log("FOCUS");
        }}
      />
      <CurrencyInput
        label="Net Sales"
        name="net-sales"
        value={netSales}
        setValue={(value) => dispatch({ type: "SET_NET_SALES", payload: value })}
      />
      <CurrencyInput
        label="Tips"
        name="tips"
        value={tips}
        setValue={(value) => dispatch({ type: "SET_TIPS", payload: value })}
      />
      <CurrencyInput
        label="Cash"
        name="cash"
        value={cash}
        setValue={(value) => dispatch({ type: "SET_CASH", payload: value })}
      />
      <CurrencyInput
        label="Gift Card"
        name="gift-card"
        value={giftCard}
        setValue={(value) => dispatch({ type: "SET_GIFT_CARD", payload: value })}
      />
    </MuiStack>
  );
};

export default ReceiptInfo;
