import MuiStack from "@mui/material/Stack";

import useReceiptInfo from "./hooks/useReceiptInfo";
import CurrencyInput from "../../components/currencyInput/CurrencyInput";
import {
  updateCash,
  updateGiftCard,
  updateNetSales,
  updateSalesReportTotal,
  updateTips,
} from "../tipSummary/slice/tipSummary.slice";

const ReceiptInfo = () => {
  const { state, inputDispatch, storeDispatch } = useReceiptInfo();
  const { salesReportTotal, netSales, tips, cash, giftCard } = state;

  return (
    <MuiStack spacing={4} sx={{ width: "100%" }}>
      <CurrencyInput
        label="Sales Report Total"
        name="srt"
        value={salesReportTotal}
        setValue={(value) =>
          inputDispatch({ type: "SET_SALES_REPORT_TOTAL", payload: value })
        }
        onBlur={() => {
          if (!salesReportTotal) {
            inputDispatch({ type: "SET_SALES_REPORT_TOTAL", payload: "0" });
          }
          storeDispatch(updateSalesReportTotal(salesReportTotal || "0"));
        }}
      />
      <CurrencyInput
        label="Net Sales"
        name="net-sales"
        value={netSales}
        setValue={(value) => inputDispatch({ type: "SET_NET_SALES", payload: value })}
        onBlur={() => {
          if (!netSales) {
            inputDispatch({ type: "SET_NET_SALES", payload: "0" });
          }
          storeDispatch(updateNetSales(netSales));
        }}
      />
      <CurrencyInput
        label="Tips"
        name="tips"
        value={tips}
        setValue={(value) => inputDispatch({ type: "SET_TIPS", payload: value })}
        onBlur={() => {
          if (!tips) {
            inputDispatch({ type: "SET_TIPS", payload: "0" });
          }
          storeDispatch(updateTips(tips));
        }}
      />
      <CurrencyInput
        label="Cash"
        name="cash"
        value={cash}
        setValue={(value) => inputDispatch({ type: "SET_CASH", payload: value })}
        onBlur={() => {
          if (!cash) {
            inputDispatch({ type: "SET_CASH", payload: "0" });
          }
          storeDispatch(updateCash(cash));
        }}
      />
      <CurrencyInput
        label="Gift Card"
        name="gift-card"
        value={giftCard}
        setValue={(value) => inputDispatch({ type: "SET_GIFT_CARD", payload: value })}
        onBlur={() => {
          if (!giftCard) {
            inputDispatch({ type: "SET_GIFT_CARD", payload: "0" });
          }
          storeDispatch(updateGiftCard(giftCard));
        }}
      />
    </MuiStack>
  );
};

export default ReceiptInfo;
