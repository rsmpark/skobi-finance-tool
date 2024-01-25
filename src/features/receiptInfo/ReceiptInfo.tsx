import MuiStack from "@mui/material/Stack";

import CurrencyInput from "@components/currencyInput/CurrencyInput";
import useReceiptInfo from "@features/receiptInfo/hooks/useReceiptInfo";
import {
  updateCash,
  updateGiftCard,
  updateNetSales,
  updateSalesReportTotal,
  updateTips,
} from "@features/tipSummary/state/tipSummary.slice";

const ReceiptInfo = () => {
  const { state, dispatch } = useReceiptInfo();
  const { salesReportTotal, netSales, tips, cash, giftCard } = state;

  return (
    <MuiStack spacing={4} sx={{ width: "100%" }}>
      <CurrencyInput
        label="Sales Report Total"
        name="srt"
        value={salesReportTotal}
        setValue={(value) => dispatch(updateSalesReportTotal(value))}
        onBlur={() => {
          if (!salesReportTotal) {
            dispatch(updateSalesReportTotal("0"));
          }
        }}
      />
      <CurrencyInput
        label="Net Sales"
        name="net-sales"
        value={netSales}
        setValue={(value) => dispatch(updateNetSales(value))}
        onBlur={() => {
          if (!netSales) {
            dispatch(updateNetSales("0"));
          }
        }}
      />
      <CurrencyInput
        label="Tips"
        name="tips"
        value={tips}
        setValue={(value) => dispatch(updateTips(value))}
        onBlur={() => {
          if (!tips) {
            dispatch(updateTips("0"));
          }
        }}
      />
      <CurrencyInput
        label="Cash"
        name="cash"
        value={cash}
        setValue={(value) => dispatch(updateCash(value))}
        onBlur={() => {
          if (!cash) {
            dispatch(updateCash("0"));
          }
        }}
      />
      <CurrencyInput
        label="Gift Card"
        name="gift-card"
        value={giftCard}
        setValue={(value) => dispatch(updateGiftCard(value))}
        onBlur={() => {
          if (!giftCard) {
            dispatch(updateGiftCard("0"));
          }
        }}
      />
    </MuiStack>
  );
};

export default ReceiptInfo;
