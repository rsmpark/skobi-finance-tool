import { FC, useEffect, useState } from "react";

import { animated, useSpring } from "@react-spring/web";
import { flexRender } from "@tanstack/react-table";

import DeleteButton from "@components/table/buttons/DeleteButton";
import { RowProps } from "@components/table/Table.types";

const Row: FC<RowProps> = ({ rowData, meta }) => {
  const [isHovering, setIsHovering] = useState(false);

  const styles = useSpring({
    opacity: isHovering ? 1 : 0,
    x: isHovering ? 0 : 5,
    config: {
      duration: 300,
    },
  });

  const elemId = `tr_${rowData.id}`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById(elemId);
      const rect = container?.getBoundingClientRect();

      if (rect) {
        const isInside =
          e.clientY >= rect.top + 10 &&
          e.clientY <= rect.bottom - 10 &&
          e.clientX >= rect.left - 60 &&
          e.clientX <= rect.right + 60;
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
      <animated.span style={styles} className="row-option delete">
        <DeleteButton onClick={() => meta?.removeRow(rowData.index)} />
      </animated.span>
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
