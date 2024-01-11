import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { parseObjectValuesToNumber } from "../../../util/format.util";
import {
  calculateHallTip,
  calculateKitchenTip,
  calculateOwner,
  calculateTipPercentage,
  calculateTotalTip,
} from "../../../util/tip.util";
import { ReceiptInfoState } from "../../receiptInfo/ReceiptInfo.types";

interface TipSummaryState {
  owner: number;
  totalTip: number;
  kitchenTip: number;
  hallTip: number;
  tipPercentage: number;
  receiptInfo: ReceiptInfoState;
}

const initialState: TipSummaryState = {
  owner: 0,
  totalTip: 0,
  kitchenTip: 0,
  hallTip: 0,
  tipPercentage: 0,
  receiptInfo: {
    salesReportTotal: "",
    netSales: "",
    tips: "",
    cash: "",
    giftCard: "",
  },
};

const tipSummarySlice = createSlice({
  name: "tipSummary",
  initialState,
  reducers: {
    calculateTips: (state) => {
      const { salesReportTotal, netSales, cash, giftCard, tips } =
        parseObjectValuesToNumber(state.receiptInfo);

      state.owner = calculateOwner(salesReportTotal, netSales);
      state.totalTip = calculateTotalTip(state.owner, tips, cash, giftCard);
      state.kitchenTip = calculateKitchenTip(state.totalTip);
      state.hallTip = calculateHallTip(state.totalTip, state.kitchenTip);
      state.tipPercentage = calculateTipPercentage(
        state.totalTip,
        state.receiptInfo.salesReportTotal
      );
    },
    updateSalesReportTotal: (state, action: PayloadAction<string>) => {
      state.receiptInfo.salesReportTotal = action.payload;
    },
    updateNetSales: (state, action: PayloadAction<string>) => {
      state.receiptInfo.netSales = action.payload;
    },
    updateTips: (state, action: PayloadAction<string>) => {
      state.receiptInfo.tips = action.payload;
    },
    updateCash: (state, action: PayloadAction<string>) => {
      state.receiptInfo.cash = action.payload;
    },
    updateGiftCard: (state, action: PayloadAction<string>) => {
      state.receiptInfo.giftCard = action.payload;
    },
    reset(state) {
      state.owner = 0;
      state.totalTip = 0;
      state.kitchenTip = 0;
      state.hallTip = 0;
      state.tipPercentage = 0;
      state.receiptInfo = {
        salesReportTotal: "",
        netSales: "",
        tips: "",
        cash: "",
        giftCard: "",
      };
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
  reset,
} = tipSummarySlice.actions;

export default tipSummarySlice.reducer;
