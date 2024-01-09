import { useReducer } from "react";

import { ActionType, ReceiptInfoState } from "../ReceiptInfo.types";

const initialState = {
  salesReportTotal: "",
  netSales: "",
  tips: "",
  cash: "",
  giftCard: "",
} as ReceiptInfoState;

const reducer = (state: ReceiptInfoState, action: ActionType) => {
  switch (action.type) {
    case "SET_SALES_REPORT_TOTAL":
      return { ...state, salesReportTotal: action.payload };
    case "SET_NET_SALES":
      return { ...state, netSales: action.payload };
    case "SET_TIPS":
      return { ...state, tips: action.payload };
    case "SET_CASH":
      return { ...state, cash: action.payload };
    case "SET_GIFT_CARD":
      return { ...state, giftCard: action.payload };
    default:
      return state;
  }
};

const useReceiptInfo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useReceiptInfo;
