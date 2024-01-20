import { styled } from "@mui/material/styles";
import { CellContext } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import { HallTipSummaryData } from "../Table.types";

const Input = styled("input")(({ theme }) => ({
  ...theme.typography.body1,
}));

const Cell = ({
  getValue,
  row,
  column,
  table,
}: CellContext<HallTipSummaryData, string | number>) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className="data-input"
      placeholder={column.columnDef.meta?.placeholder}
    />
  );
};

export default Cell;
