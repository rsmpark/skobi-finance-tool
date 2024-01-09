import { useTypedSelector } from "../../../app/store";
import TipSummaryCard from "../TipSummaryCard";

const TotalTipListItem = () => {
  const value = useTypedSelector((state) => state.tipSummary.totalTip);
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Total Tip" />
      <TipSummaryCard.ItemResult value={value} />
    </TipSummaryCard.ListItem>
  );
};

export default TotalTipListItem;
