import { useAppDispatch, useTypedSelector } from "../../../app/store";
import { selectReceiptInfo } from "../../tipSummary/state/tipSummary.selectors";

const useReceiptInfo = () => {
  const dispatch = useAppDispatch();
  const state = useTypedSelector(selectReceiptInfo);

  return {
    state,
    dispatch,
  };
};

export default useReceiptInfo;
