import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { parseStringToNumber } from "../../../util/format.util";
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
  receiptInfo: ParsedReceiptInfo;
}

const initialState: TipSummaryState = {
  owner: 0,
  totalTip: 0,
  kitchenTip: 0,
  hallTip: 0,
  receiptInfo: {
    salesReportTotal: 0,
    netSales: 0,
    tips: 0,
    cash: 0,
    giftCard: 0,
  },
};

const tipSummarySlice = createSlice({
  name: "tipSummary",
  initialState,
  reducers: {
    calculateTips: (state) => {
      const { salesReportTotal, netSales, cash, giftCard, tips } = state.receiptInfo;

      state.owner = calculateOwner(salesReportTotal, netSales);
      state.totalTip = calculateTotalTip(state.owner, tips, cash, giftCard);
      state.kitchenTip = calculateKitchenTip(state.totalTip);
      state.hallTip = calculateHallTip(state.totalTip, state.kitchenTip);
    },
    updateSalesReportTotal: (state, action: PayloadAction<string>) => {
      const parsedNumber = parseStringToNumber(action.payload);
      if (parsedNumber !== null) state.receiptInfo.salesReportTotal = parsedNumber;
    },
    updateNetSales: (state, action: PayloadAction<string>) => {
      const parsedNumber = parseStringToNumber(action.payload);
      if (parsedNumber !== null) state.receiptInfo.netSales = parsedNumber;
    },
    updateTips: (state, action: PayloadAction<string>) => {
      const parsedNumber = parseStringToNumber(action.payload);
      if (parsedNumber !== null) state.receiptInfo.tips = parsedNumber;
    },
    updateCash: (state, action: PayloadAction<string>) => {
      const parsedNumber = parseStringToNumber(action.payload);
      if (parsedNumber !== null) state.receiptInfo.cash = parsedNumber;
    },
    updateGiftCard: (state, action: PayloadAction<string>) => {
      const parsedNumber = parseStringToNumber(action.payload);
      if (parsedNumber !== null) state.receiptInfo.giftCard = parsedNumber;
    },
  },
});

export const {
  calculateTips,
  updateSalesReportTotal,
  updateNetSales,
  updateTips,
  updateCash,
  updateGiftCard,
} = tipSummarySlice.actions;

export default tipSummarySlice.reducer;
