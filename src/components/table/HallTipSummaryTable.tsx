import { useMemo } from "react";

import useHallTipSummaryTable from "@components/table/hooks/useHallTipSummaryTable";
import Table from "@components/table/Table";

const HallTipSummaryTable = () => {
  const { table, data } = useHallTipSummaryTable();

  const headers = table.getFlatHeaders();

  const columnSizeVars = useMemo(() => {
    const colSizes: { [key: string]: number } = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]!;
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    }
    return colSizes;
  }, [headers]);

  if (!table) return null;

  return (
    <Table style={{ ...columnSizeVars }}>
      <Table.Headers table={table} />
      <Table.Rows table={table} />
    </Table>
  );
};

export default HallTipSummaryTable;
