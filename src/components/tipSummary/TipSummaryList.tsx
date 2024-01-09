import MuiStack from "@mui/material/Stack";

import HallTipItem from "./items/HallTipItem";
import KitchenTipItem from "./items/KitchenTipItem";
import OwnerItem from "./items/OwnerItem";
import TipPercentageItem from "./items/TipPercentageItem";
import TotalTipItem from "./items/TotalTipItem";

const TipSummaryList = () => {
  return (
    <MuiStack spacing={5}>
      <OwnerItem />
      <TotalTipItem />
      <HallTipItem />
      <KitchenTipItem />
      <TipPercentageItem />
    </MuiStack>
  );
};

export default TipSummaryList;
