import { RootState } from "@store";

export const selectHallTipSummary = (state: RootState) => state.tipSummary.owner;
