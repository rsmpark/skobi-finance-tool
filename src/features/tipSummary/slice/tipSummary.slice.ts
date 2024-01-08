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
  hallTip: number;
}

const initialState: TipSummaryState = {
  owner: 0,
  totalTip: 0,
  kitchenTip: 0,
  hallTip: 0,
};

const tipSummarySlice = createSlice({
  name: "tipSummary",
  initialState,
  reducers: {
    calculateTips: (state, action: PayloadAction<ParsedReceiptInfo>) => {
      const { salesReportTotal, netSales, cash, giftCard, tips } = action.payload;

      state.owner = calculateOwner(salesReportTotal, netSales);
      state.totalTip = calculateTotalTip(state.owner, tips, cash, giftCard);
      state.kitchenTip = calculateKitchenTip(state.totalTip);
      state.hallTip = calculateHallTip(state.totalTip, state.kitchenTip);
    },
  },
});

export const { calculateTips } = tipSummarySlice.actions;

export default tipSummarySlice.reducer;
