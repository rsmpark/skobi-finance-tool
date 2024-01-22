import DeleteIcon from "@mui/icons-material/Delete";
import { Row as RowType, flexRender } from "@tanstack/react-table";
import { useState } from "react";

import { HallTipSummaryData } from "../Table.types";

const Row = ({ rowData }: { rowData: RowType<HallTipSummaryData> }) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div key={rowData.id} className="tr">
      {/* {showDelete && <DeleteIcon />} */}
      {rowData.getVisibleCells().map((cell) => (
        <div
          key={cell.id}
          className="td"
          style={{
            width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
          }}
          onMouseEnter={() => {
            setShowDelete(true);
          }}
          onMouseLeave={() => {
            setShowDelete(false);
          }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
    </div>
  );
};

export default Row;
