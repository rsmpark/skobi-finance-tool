import { useTypedSelector } from "../../../app/store";
import TipSummaryCard from "../TipSummaryCard";

const OwnerListItem = () => {
  const value = useTypedSelector((state) => state.tipSummary.owner);
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Owner" />
      <TipSummaryCard.ItemResult value={value} />
    </TipSummaryCard.ListItem>
  );
};

export default OwnerListItem;
