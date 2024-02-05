import { FC, useEffect, useState } from "react";

import { styled } from "@mui/material";
import { CellContext } from "@tanstack/react-table";

import { HallTipSummaryData } from "@components/table/Table.types";

const Input = styled("input")(({ theme }) => ({
  ...theme.typography,
  color: (theme.components?.MuiInput?.styleOverrides?.root as { color?: string })?.color,
  fontWeight: 400,
  padding: "10px",
  "&::placeholder": {
    color: theme.palette.grey[400],
  },
}));

const Cell: FC<CellContext<HallTipSummaryData, string | number | undefined>> = ({
  getValue,
  row,
  column,
  table,
}) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const inputAttr = column.columnDef.meta?.inputAttr;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    if (value !== undefined) {
      table.options.meta?.updateData(row.index, column.id, value.toString());
    }
  };
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className="data-input"
      {...inputAttr}
    />
  );
};

export default Cell;
