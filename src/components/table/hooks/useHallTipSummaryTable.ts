import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { useTypedSelector } from "@app/store";
import { selectHallTipSummary } from "@features/hallTipSummary/state/hallTipSummary.selectors";
import { hallTipSummaryColumns as columns } from "@util/table.util";
const useHallTipSummaryTable = () => {
  const hallTipSummary = useTypedSelector(selectHallTipSummary);

  const table = useReactTable({
    data: hallTipSummary,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};

export default useHallTipSummaryTable;
