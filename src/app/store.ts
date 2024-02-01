import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import hallTipSummarySlice from "@features/hallTipSummary/state/hallTipSummary.slice";
import tipSummarySlice from "@features/tipSummary/state/tipSummary.slice";

export const store = configureStore({
  reducer: {
    tipSummary: tipSummarySlice,
    hallTipSummary: hallTipSummarySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
