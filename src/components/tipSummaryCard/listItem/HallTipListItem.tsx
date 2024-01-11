import { useTypedSelector } from "../../../app/store";
import { selectHallTip } from "../../../features/tipSummary/state/tipSummary.selectors";
import TipSummaryCard from "../TipSummaryCard";

const HallTipListItem = () => {
  const value = useTypedSelector(selectHallTip);
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Hall Tip" />
      <TipSummaryCard.ItemResult value={value} />
    </TipSummaryCard.ListItem>
  );
};

export default HallTipListItem;
