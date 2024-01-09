import HallTipListItem from "../../components/tipSummaryCard/listItem/HallTipListItem";
import KitchenTipListItem from "../../components/tipSummaryCard/listItem/KitchenTipListItem";
import OwnerListItem from "../../components/tipSummaryCard/listItem/OwnerListItem";
import TipPercentageItem from "../../components/tipSummaryCard/listItem/TipPercentageItem";
import TotalTipListItem from "../../components/tipSummaryCard/listItem/TotalTipListItem";
import TipSummaryCard from "../../components/tipSummaryCard/TipSummaryCard";

const TipSummary = () => {
  {
    /* TODO: Fix TipSummary Props  */
  }
  return (
    <TipSummaryCard
      receiptInfo={{
        salesReportTotal: "0",
        netSales: "0",
        tips: "0",
        cash: "0",
        giftCard: "0",
      }}
    >
      <TipSummaryCard.List>
        <OwnerListItem />
        <TotalTipListItem />
        <HallTipListItem />
        <KitchenTipListItem />
        <TipPercentageItem />
      </TipSummaryCard.List>
      <TipSummaryCard.Action />
    </TipSummaryCard>
  );
};

export default TipSummary;
