import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HallTipSummaryState {
  name: string;
  tip: number;
}

const initialState: HallTipSummaryState[] = [];

const hallTipSummarySlice = createSlice({
  name: "hallhallTipSummary",
  initialState,
  reducers: {
    updateHallTipSummary: (
      state,
      action: PayloadAction<{
        hallTipSummary: HallTipSummaryState[];
      }>
    ) => {
      return action.payload.hallTipSummary;
    },
  },
});

export const { updateHallTipSummary } = hallTipSummarySlice.actions;

export default hallTipSummarySlice.reducer;
