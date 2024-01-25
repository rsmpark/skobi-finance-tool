import { FC, useEffect, useState } from "react";

import { styled } from "@mui/material";
import { CellContext } from "@tanstack/react-table";

import { HallTipSummaryData } from "@components/table/Table.types";

const Cell: FC<CellContext<HallTipSummaryData, string | number>> = ({
  getValue,
  row,
  column,
  table,
}) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const Input = styled("input")(({ theme }) => ({
    ...theme.typography,
    color: (theme.components?.MuiInput?.styleOverrides?.root as { color?: string })
      ?.color,
    fontWeight: 400,
    padding: "10px",
    "&::placeholder": {
      color: theme.palette.grey[400],
    },
  }));

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
