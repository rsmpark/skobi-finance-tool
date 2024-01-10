import { useAppDispatch, useTypedSelector } from "../../../app/store";

const useReceiptInfo = () => {
  const dispatch = useAppDispatch();
  const state = useTypedSelector((state) => state.tipSummary.receiptInfo);

  return {
    state,
    dispatch,
  };
};

export default useReceiptInfo;
