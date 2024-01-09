import TipPercentageItem from "../../components/tipSummary/listItem/TipPercentageItem";
import TipSummaryCard from "../../components/tipSummary/TipSummaryCard";

const OwnerListItem = () => {
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Owner" />
      <TipSummaryCard.ItemResult value={0} />
    </TipSummaryCard.ListItem>
  );
};

const TotalTipListItem = () => {
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Total Tip" />
      <TipSummaryCard.ItemResult value={0} />
    </TipSummaryCard.ListItem>
  );
};

const HallTipListItem = () => {
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Hall Tip" />
      <TipSummaryCard.ItemResult value={0} />
    </TipSummaryCard.ListItem>
  );
};

const KitchenTipListItem = () => {
  return (
    <TipSummaryCard.ListItem>
      <TipSummaryCard.ItemLabel label="Kitchen Tip" />
      <TipSummaryCard.ItemResult value={0} />
    </TipSummaryCard.ListItem>
  );
};

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
