import { useTypedSelector } from "../../../app/store";
import { selectOwner } from "../../../features/tipSummary/state/tipSummary.selectors";
import TipSummaryCard from "../TipSummaryCard";

const OwnerListItem = () => {
  const value = useTypedSelector(selectOwner);
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Owner" />
      <TipSummaryCard.ItemResult value={value} />
    </TipSummaryCard.ListItem>
  );
};

export default OwnerListItem;
