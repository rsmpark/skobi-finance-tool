import { calculateTips } from "./slice/tipSummary.slice";
import { useAppDispatch } from "../../app/store";
import HallTipListItem from "../../components/tipSummaryCard/listItem/HallTipListItem";
import KitchenTipListItem from "../../components/tipSummaryCard/listItem/KitchenTipListItem";
import OwnerListItem from "../../components/tipSummaryCard/listItem/OwnerListItem";
import TipPercentageItem from "../../components/tipSummaryCard/listItem/TipPercentageItem";
import TotalTipListItem from "../../components/tipSummaryCard/listItem/TotalTipListItem";
import TipSummaryCard from "../../components/tipSummaryCard/TipSummaryCard";

const TipSummary = () => {
  const dispatch = useAppDispatch();
  const handleCalculate = () => {
    dispatch(calculateTips());
  };

  return (
    <TipSummaryCard>
      <TipSummaryCard.List>
        <OwnerListItem />
        <TotalTipListItem />
        <HallTipListItem />
        <KitchenTipListItem />
        <TipPercentageItem />
      </TipSummaryCard.List>
      <TipSummaryCard.Actions handleCalculate={handleCalculate} handleReset={() => {}} />
    </TipSummaryCard>
  );
};

export default TipSummary;
