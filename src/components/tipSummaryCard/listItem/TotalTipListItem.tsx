import MuiBox from "@mui/material/Box";

import TipSummaryCard from "@components/tipSummaryCard/TipSummaryCard";
import { selectTotalTip } from "@features/tipSummary/state/tipSummary.selectors";
import { useTypedSelector } from "@store";
import { floorToDigit } from "@util/format.util";

const TotalTipListItem = () => {
  const value = useTypedSelector(selectTotalTip);
  return (
    <TipSummaryCard.ListItem>
      <MuiBox>
        <TipSummaryCard.ItemLabel label="Total Tip" />
        {value != 0 && (
          <TipSummaryCard.ItemLabel
            label="Rounded"
            variant="body1"
            color="text.disabled"
          />
        )}
      </MuiBox>
      <MuiBox>
        <TipSummaryCard.ItemResult value={value} />
        {value != 0 && (
          <TipSummaryCard.ItemResult
            value={floorToDigit(value, 10)}
            variant="body1"
            color="text.secondary"
            textAlign="end"
          />
        )}
      </MuiBox>
    </TipSummaryCard.ListItem>
  );
};

export default TotalTipListItem;
