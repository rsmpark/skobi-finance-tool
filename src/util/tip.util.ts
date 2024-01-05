export const calculateOwner = (salesReportTotal: number, netSales: number): number => {
  return salesReportTotal - netSales;
};

export const calculateTotalTip = (
  tips: number,
  cash: number,
  giftCard: number = 0
): number => {
  return cash - tips + giftCard;
};

export const calculateKitchenTip = (tipsTotal: number) => {
  return tipsTotal * 0.4;
};

export const calculateHallTip = (tipsTotal: number, kitchenTips: number) => {
  return tipsTotal - kitchenTips;
};
