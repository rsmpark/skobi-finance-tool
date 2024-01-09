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
    // const parsedReceiptInfo = parseObjectValuesToNumber(
    //   receiptInfo
    // ) as ParsedReceiptInfo;

    // Dummy date
    // TODO: remove dummy data
    const parsedReceiptInfo = {
      salesReportTotal: 15769.13,
      netSales: 14300.47,
      tips: 2157.85,
      cash: 1350,
      giftCard: 0,
    };

    dispatch(calculateTips(parsedReceiptInfo));
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
      <TipSummaryCard.Action handleCalculate={handleCalculate} handleReset={() => {}} />
    </TipSummaryCard>
  );
};

export default TipSummary;
