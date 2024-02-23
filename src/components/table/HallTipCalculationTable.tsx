import { useMemo } from "react";

import useHallCalculationTable from "@components/table/hooks/useHallTipCalculationTable";
import Table from "@components/table/Table";

const HallTipCalculationTable = () => {
  const { table, data } = useHallCalculationTable();

  const meta = table.options.meta;
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

  if (!table || !meta) return null;
  return (
    <Table style={{ ...columnSizeVars }}>
      <Table.Headers table={table} />
      <Table.Rows table={table} meta={meta} />
      <Table.Actions meta={meta} data={data} />
    </Table>
  );
};

export default HallTipCalculationTable;
