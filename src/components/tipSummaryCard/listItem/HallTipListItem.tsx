import { useTypedSelector } from "../../../app/store";
import { selectHallTip } from "../../../features/tipSummary/state/tipSummary.selectors";
import { floorToDigit } from "../../../util/format.util";
import TipSummaryCard from "../TipSummaryCard";

const HallTipListItem = () => {
  const value = useTypedSelector(selectHallTip);
  // TODO: use floored value
  const flooredValue = floorToDigit(value, 10);
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Hall Tip" />
      <TipSummaryCard.ItemResult value={value} />
    </TipSummaryCard.ListItem>
  );
};

export default HallTipListItem;
