import MuiBox from "@mui/material/Box";

import { useTypedSelector } from "../../../app/store";
import { selectTotalTip } from "../../../features/tipSummary/state/tipSummary.selectors";
import { floorToDigit } from "../../../util/format.util";
import TipSummaryCard from "../TipSummaryCard";

const TotalTipListItem = () => {
  const value = useTypedSelector(selectTotalTip);
  return (
    <TipSummaryCard.ListItem>
      <MuiBox>
        <TipSummaryCard.ItemLabel label="Total Tip" />
        <TipSummaryCard.ItemLabel label="Rounded" variant="body1" color="text.disabled" />
      </MuiBox>
      <MuiBox>
        <TipSummaryCard.ItemResult value={value} />
        <TipSummaryCard.ItemResult
          value={floorToDigit(value, 10)}
          variant="body1"
          color="text.secondary"
          textAlign="end"
        />
      </MuiBox>
    </TipSummaryCard.ListItem>
  );
};

export default TotalTipListItem;
