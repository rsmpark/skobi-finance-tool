import { FC, useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import { CellContext } from "@tanstack/react-table";

import { HallTipSummaryData } from "@components/table/Table.types";

const Input = styled("input")(({ theme }) => ({
  ...theme.typography.body1,
}));

const Cell: FC<CellContext<HallTipSummaryData, string | number>> = ({
  getValue,
  row,
  column,
  table,
}) => {
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
