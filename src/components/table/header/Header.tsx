import { Header, flexRender } from "@tanstack/react-table";

import { HallTipSummaryData } from "../Table.types";

const Header = ({ headerData }: { headerData: Header<HallTipSummaryData, unknown> }) => {
  return (
    <div
      {...{
        key: headerData.id,
        className: "th noselect",
        style: {
          width: `calc(var(--header-${headerData?.id}-size) * 1px)`,
        },
      }}
    >
      {headerData.isPlaceholder
        ? null
        : flexRender(headerData.column.columnDef.header, headerData.getContext())}
    </div>
  );
};

export default Header;
