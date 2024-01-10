import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  parseObjectValuesToNumber,
  parseStringToNumber,
} from "../../../util/format.util";
import {
  calculateHallTip,
  calculateKitchenTip,
  calculateOwner,
  calculateTotalTip,
} from "../../../util/tip.util";
import { ReceiptInfoState } from "../../receiptInfo/ReceiptInfo.types";

interface TipSummaryState {
  owner: number;
  totalTip: number;
  kitchenTip: number;
  hallTip: number;
  receiptInfo: ReceiptInfoState;
}

const initialState: TipSummaryState = {
  owner: 0,
  totalTip: 0,
  kitchenTip: 0,
  hallTip: 0,
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
