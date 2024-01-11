import BigNumber from "bignumber.js";

import { ceilToDigit, floorToDigit, parseStringToNumber } from "./format.util";

export const calculateOwner = (salesReportTotal: number, netSales: number): number => {
  return new BigNumber(salesReportTotal).minus(netSales).toNumber();
};

export const calculateTotalTip = (
  owner: number,
  tips: number,
  cash: number,
  giftCard: number = 0
): number => {
  return new BigNumber(cash).minus(owner).plus(tips).plus(giftCard).toNumber();
};

export const calculateKitchenTip = (totalTip: number) => {
  return new BigNumber(floorToDigit(totalTip, 10)).multipliedBy(0.4).toNumber();
};

export const calculateHallTip = (totalTip: number, kitchenTips: number) => {
  return BigNumber(floorToDigit(totalTip, 10))
    .minus(ceilToDigit(kitchenTips, 10))
    .toNumber();
};

export const calculateTipPercentage = (
  totalTip: number,
  salesReportTotal: string
): string => {
  const parsedSalesReportTotal = parseStringToNumber(salesReportTotal);

  if (parsedSalesReportTotal !== null) {
    return new BigNumber(floorToDigit(totalTip, 10))
      .dividedBy(parsedSalesReportTotal)
      .multipliedBy(100)
      .toNumber()
      .toFixed(2);
  }

  return "";
};
