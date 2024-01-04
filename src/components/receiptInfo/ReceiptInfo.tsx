import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import { useState } from "react";

import CurrencyInput from "../currencyInput/CurrencyInput";

const ReceiptInfo = () => {
  const [salesReportTotal, setSalesReportTotal] = useState<string>("");
  const [netSales, setNetSales] = useState<string>("");
  const [tips, setTips] = useState<string>("");
  const [cash, setCash] = useState<string>("");
  const [giftCardAmt, setGiftCardAmt] = useState<string>("");

  return (
    <MuiStack>
      <MuiBox sx={{ display: "flex", flexWrap: "wrap" }}>
        <CurrencyInput
          label="Sales Report Total"
          name="srt"
          value={salesReportTotal}
          setValue={setSalesReportTotal}
        />
      </MuiBox>
    </MuiStack>
  );
};

export default ReceiptInfo;
