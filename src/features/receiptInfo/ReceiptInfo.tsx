import MuiPaper from "@mui/material/Paper";
import MuiStack from "@mui/material/Stack";
import { useState } from "react";

import CurrencyInput from "../../components/currencyInput/CurrencyInput";
import TipSummary from "../tipSummary/TipSummary";

const ReceiptInfo = () => {
  const [salesReportTotal, setSalesReportTotal] = useState<string>("");
  const [netSales, setNetSales] = useState<string>("");
  const [tips, setTips] = useState<string>("");
  const [cash, setCash] = useState<string>("");
  const [giftCard, setGiftCard] = useState<string>("");

  return (
    <MuiPaper
      component="form"
      elevation={1}
      sx={{ maxWidth: 800, padding: 4, borderRadius: 4 }}
    >
      <MuiStack direction={{ xs: "column", md: "row" }} spacing={5}>
        <MuiStack spacing={4} sx={{ width: "100%" }}>
          <CurrencyInput
            label="Sales Report Total"
            name="srt"
            value={salesReportTotal}
            setValue={setSalesReportTotal}
          />
          <CurrencyInput
            label="Net Sales"
            name="net-sales"
            value={netSales}
            setValue={setNetSales}
          />
          <CurrencyInput label="Tips" name="tips" value={tips} setValue={setTips} />
          <CurrencyInput label="Cash" name="cash" value={cash} setValue={setCash} />
          <CurrencyInput
            label="Gift Card"
            name="gift-card"
            value={giftCard}
            setValue={setGiftCard}
          />
        </MuiStack>
        <TipSummary />
      </MuiStack>
    </MuiPaper>
  );
};

export default ReceiptInfo;
