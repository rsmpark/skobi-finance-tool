import { FC } from "react";

import AddIcon from "@components/table/icons/AddIcon";
import { AddButtonProps } from "@components/table/Table.types";

const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  return (
    <div className="tr add-row" onClick={onClick}>
      <span className="svg-icon svg-gray" style={{ marginRight: 4 }}>
        <AddIcon />
      </span>
      New
    </div>
  );
};

export default AddButton;
