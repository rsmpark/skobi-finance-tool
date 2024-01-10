import { useTypedSelector } from "../../../app/store";
import { selectTotalTip } from "../../../features/tipSummary/state/tipSummary.selectors";
import TipSummaryCard from "../TipSummaryCard";

const TotalTipListItem = () => {
  const value = useTypedSelector(selectTotalTip);
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Total Tip" />
      <TipSummaryCard.ItemResult value={value} />
    </TipSummaryCard.ListItem>
  );
};

export default TotalTipListItem;
