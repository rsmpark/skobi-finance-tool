import MuiBox from "@mui/material/Box";

import { useTypedSelector } from "../../../app/store";
import { selectKitchenTip } from "../../../features/tipSummary/state/tipSummary.selectors";
import { ceilToDigit } from "../../../util/format.util";
import TipSummaryCard from "../TipSummaryCard";

const KitchenTipListItem = () => {
  const value = useTypedSelector(selectKitchenTip);

  return (
    <TipSummaryCard.ListItem>
      <MuiBox>
        <TipSummaryCard.ItemLabel label="Kitchen Tip" />
        <TipSummaryCard.ItemLabel label="Rounded" variant="body1" color="text.disabled" />
      </MuiBox>
      <MuiBox>
        <TipSummaryCard.ItemResult value={value} />
        <TipSummaryCard.ItemResult
          value={ceilToDigit(value, 10)}
          variant="body1"
          color="text.secondary"
          textAlign="end"
        />
      </MuiBox>
    </TipSummaryCard.ListItem>
  );
};

export default KitchenTipListItem;
