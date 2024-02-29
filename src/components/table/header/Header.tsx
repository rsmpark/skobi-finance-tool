import MuiTypography from "@mui/material/Typography";
import { HeaderContext, flexRender } from "@tanstack/react-table";

import NotesIcon from "@components/table/icons/NotesIcon";
import NumbersIcon from "@components/table/icons/NumbersIcon";
import { HeaderProps } from "@components/table/Table.types";

const getIcon = (type: string) => {
  switch (type) {
    case "text":
      return <NotesIcon className="svg-icon svg-gray icon-margin" />;
    case "number":
      return <NumbersIcon className="svg-icon svg-gray icon-margin" />;
    default:
      return null;
  }
};

const Header = <T,>(props: HeaderProps<T>) => {
  const { headerData, type } = props;
  const HeaderIcon = getIcon(type);
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
      <div className="th-content">
        {HeaderIcon}
        {headerData.isPlaceholder
          ? null
          : flexRender(headerData.column.columnDef.header, headerData.getContext())}
      </div>
    </div>
  );
};

// TODO: refactor into own file
export const HeaderCell = <T,>(info: HeaderContext<T, string>) => (
  <MuiTypography variant="h6" fontSize={13}>
    {info.header.id.toUpperCase()}
  </MuiTypography>
);

export default Header;
