import { FC, useEffect, useState } from "react";

import { flexRender } from "@tanstack/react-table";

import DeleteButton from "@components/table/buttons/DeleteButton";
import { RowProps } from "@components/table/Table.types";

const Row: FC<RowProps> = ({ rowData, meta }) => {
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
      {rowData.getVisibleCells().map((cell) => (
        <div
          key={cell.id}
          className="td"
          style={{
            width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
          }}
        >
          {cell.column.id === "name" && isHovering && (
            <span className="row-option delete">
              <DeleteButton onClick={() => meta?.removeRow(rowData.index)} />
            </span>
          )}
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
    </div>
  );
};

export default Row;
