import DeleteIcon from "@mui/icons-material/Delete";
import { Row as RowType, flexRender } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import { HallTipSummaryData } from "../Table.types";

const Row = ({ rowData }: { rowData: RowType<HallTipSummaryData> }) => {
  const [isHovering, setIsHovering] = useState(false);

  const elemId = `tr_${rowData.id}`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById(elemId);
      const rect = container?.getBoundingClientRect();

      if (rect) {
        const isInside = e.clientY >= rect.top && e.clientY <= rect.bottom;
        setIsHovering(isInside);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [elemId]);

  return (
    <div key={rowData.id} className="tr" id={elemId}>
      {isHovering && <DeleteIcon />}
      {rowData.getVisibleCells().map((cell) => (
        <div
          key={cell.id}
          className="td"
          style={{
            width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
          }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
    </div>
  );
};

export default Row;
