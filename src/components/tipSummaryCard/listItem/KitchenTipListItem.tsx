import { useTypedSelector } from "../../../app/store";
import { floorToDigit } from "../../../util/format.util";
import TipSummaryCard from "../TipSummaryCard";

const KitchenTipListItem = () => {
  const value = useTypedSelector((state) => state.tipSummary.kitchenTip);
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
