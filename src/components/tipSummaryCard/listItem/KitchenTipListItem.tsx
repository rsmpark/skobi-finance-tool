import { useTypedSelector } from "../../../app/store";
import { selectKitchenTip } from "../../../features/tipSummary/state/tipSummary.selectors";
import { floorToDigit } from "../../../util/format.util";
import TipSummaryCard from "../TipSummaryCard";

const KitchenTipListItem = () => {
  const value = useTypedSelector(selectKitchenTip);
  // TODO: use floored value
  const flooredValue = floorToDigit(value, 10);

  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Kitchen Tip" />
      <TipSummaryCard.ItemResult value={value} />
    </TipSummaryCard.ListItem>
  );
};

export default KitchenTipListItem;
