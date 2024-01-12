import TipSummaryCard from "@components/tipSummaryCard/TipSummaryCard";
import { selectOwner } from "@features/tipSummary/state/tipSummary.selectors";
import { useTypedSelector } from "@store";

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
