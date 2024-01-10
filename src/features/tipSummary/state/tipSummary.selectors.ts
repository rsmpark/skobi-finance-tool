import { RootState } from "../../../app/store";

export const selectOwner = (state: RootState) => state.tipSummary.owner;
export const selectTotalTip = (state: RootState) => state.tipSummary.totalTip;
export const selectHallTip = (state: RootState) => state.tipSummary.hallTip;
export const selectKitchenTip = (state: RootState) => state.tipSummary.kitchenTip;
export const selectReceiptInfo = (state: RootState) => state.tipSummary.receiptInfo;