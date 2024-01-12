import { selectReceiptInfo } from "@features/tipSummary/state/tipSummary.selectors";
import { useAppDispatch, useTypedSelector } from "@store";

const useReceiptInfo = () => {
  const dispatch = useAppDispatch();
  const state = useTypedSelector(selectReceiptInfo);

  return {
    state,
    dispatch,
  };
};

export default useReceiptInfo;
