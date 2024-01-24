import { useEffect, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, IconButtonProps } from "@mui/material";
import { Row as RowType, TableMeta, flexRender } from "@tanstack/react-table";

import { HallTipSummaryData } from "../Table.types";

const DeleteIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <DeleteIcon />
  </IconButton>
);

const Row = ({
  rowData,
  meta,
}: {
  rowData: RowType<HallTipSummaryData>;
  meta?: TableMeta<HallTipSummaryData>;
}) => {
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
      {isHovering && <DeleteIconButton onClick={() => meta?.removeRow(rowData.index)} />}
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
