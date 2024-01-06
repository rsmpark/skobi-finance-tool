import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  calculateHallTip,
  calculateKitchenTip,
  calculateOwner,
  calculateTotalTip,
} from "../../../util/tip.util";
import { ParsedReceiptInfo } from "../../receiptInfo/ReceiptInfo.types";

interface TipSummaryState {
  owner: number;
  totalTip: number;
  kitchenTip: number;
  hallTips: number;
}

const initialState: TipSummaryState = {
  owner: 0,
  totalTip: 0,
  kitchenTip: 0,
  hallTips: 0,
};

const tipSummarySlice = createSlice({
  name: "tipSummary",
  initialState,
  reducers: {
    calculateTips: (state, action: PayloadAction<ParsedReceiptInfo>) => {
      const { salesReportTotal, netSales, cash, giftCard, tips } = action.payload;

      state.owner = calculateOwner(salesReportTotal, netSales);
      state.totalTip = calculateTotalTip(tips, cash, giftCard);
      state.kitchenTip = calculateKitchenTip(Math.floor(state.totalTip));
      state.hallTips = calculateHallTip(state.totalTip, Math.ceil(state.kitchenTip));
    },
  },
});

export const { calculateTips } = tipSummarySlice.actions;

export default tipSummarySlice.reducer;
