import { styled } from "@mui/material/styles";
import { CellContext } from "@tanstack/react-table";
import { useState } from "react";
import ContentEditable from "react-contenteditable";

import { HallTipSummaryData } from "../Table.types";

const StyledContentEditable = styled(ContentEditable)(({ theme }) => ({
  ...theme.typography.button,
}));

const Cell = ({
  getValue,
  row,
  column,
  table,
}: CellContext<HallTipSummaryData, string | number>) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };
  return (
    <StyledContentEditable
      html={value.toString()}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className="data-input"
    />
  );
};

export default Cell;
