import HallTipListItem from "@components/tipSummaryCard/listItem/HallTipListItem";
import KitchenTipListItem from "@components/tipSummaryCard/listItem/KitchenTipListItem";
import OwnerListItem from "@components/tipSummaryCard/listItem/OwnerListItem";
import TipPercentageItem from "@components/tipSummaryCard/listItem/TipPercentageItem";
import TotalTipListItem from "@components/tipSummaryCard/listItem/TotalTipListItem";
import TipSummaryCard from "@components/tipSummaryCard/TipSummaryCard";
import { selectInputsAreEmpty } from "@features/tipSummary/state/tipSummary.selectors";
import { calculateTips, reset } from "@features/tipSummary/state/tipSummary.slice";
import { useAppDispatch, useTypedSelector } from "@store";

const TipSummary = () => {
  const dispatch = useAppDispatch();
  const emptyInputs = useTypedSelector(selectInputsAreEmpty);

  const handleCalculate = () => {
    dispatch(calculateTips());
  };

  const handleReset = () => {
    dispatch(reset());
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
      <TipSummaryCard.Actions
        handleCalculate={handleCalculate}
        handleReset={handleReset}
        disabled={emptyInputs}
      />
    </TipSummaryCard>
  );
};

export default TipSummary;
