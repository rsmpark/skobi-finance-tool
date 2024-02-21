import Table from "./Table";
import useTable from "./hooks/useTable";

const HallTipCalculationTable = () => {
  const { table, data } = useTable();
  return (
    <Table>
      <Table.Headers />
    </Table>
  );
};
