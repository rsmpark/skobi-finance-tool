import { RootState } from "../../../app/store";
import { calculateTipPercentage } from "../../../util/tip.util";

export const selectOwner = (state: RootState) => state.tipSummary.owner;
export const selectTotalTip = (state: RootState) => state.tipSummary.totalTip;
export const selectHallTip = (state: RootState) => state.tipSummary.hallTip;
export const selectKitchenTip = (state: RootState) => state.tipSummary.kitchenTip;
export const selectReceiptInfo = (state: RootState) => state.tipSummary.receiptInfo;
export const selectInputsAreEmpty = (state: RootState) => {
  return Object.values(state.tipSummary.receiptInfo).some((value) => {
    return value.length === 0;
  });
};

export const selectTipPercentage = (state: RootState) => {
  return calculateTipPercentage(
    state.tipSummary.totalTip,
    state.tipSummary.receiptInfo.salesReportTotal
  );
};
