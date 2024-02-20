import BigNumber from "bignumber.js";

import { ceilToDigit, floorToDigit, parseStringToNumber } from "@util/format.util";

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

export const calculateKitchenTotalTip = (totalTip: number) => {
  return new BigNumber(floorToDigit(totalTip, 10)).multipliedBy(0.4).toNumber();
};

export const calculateHallTotalTip = (totalTip: number, kitchenTips: number) => {
  return BigNumber(floorToDigit(totalTip, 10))
    .minus(ceilToDigit(kitchenTips, 10))
    .toNumber();
};

export const calculateTipPercentage = (
  totalTip: number,
  salesReportTotal: string
): number => {
  const parsedSalesReportTotal = parseStringToNumber(salesReportTotal);

  return new BigNumber(floorToDigit(totalTip, 10))
    .dividedBy(parsedSalesReportTotal)
    .multipliedBy(100)
    .toNumber();
};

export const calculateHallTips = (
  hallTotalTip: number,
  totalHours: number,
  serverHours: number
): number => {
  return new BigNumber(hallTotalTip)
    .dividedBy(totalHours)
    .multipliedBy(serverHours)
    .decimalPlaces(2)
    .toNumber();
};
