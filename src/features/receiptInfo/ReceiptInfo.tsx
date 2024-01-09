import MuiStack from "@mui/material/Stack";
import { useState } from "react";

import CurrencyInput from "../../components/currencyInput/CurrencyInput";

const ReceiptInfo = () => {
  const [salesReportTotal, setSalesReportTotal] = useState<string>("");
  const [netSales, setNetSales] = useState<string>("");
  const [tips, setTips] = useState<string>("");
  const [cash, setCash] = useState<string>("");
  const [giftCard, setGiftCard] = useState<string>("");

  return (
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
  );
};

export default ReceiptInfo;
