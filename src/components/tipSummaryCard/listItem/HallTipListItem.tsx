import TipSummaryCard from "@components/tipSummaryCard/TipSummaryCard";
import { selectHallTip } from "@features/tipSummary/state/tipSummary.selectors";
import { useTypedSelector } from "@store";

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
