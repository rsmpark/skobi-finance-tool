import { FC } from "react";

import MuiTypography from "@mui/material/Typography";

import AddIcon from "@components/table/icons/AddIcon";
import { ActionButtonProps } from "@components/table/Table.types";

const AddButton: FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <div className="tr actions-btn" onClick={onClick}>
      <span className="svg-icon svg-gray" style={{ marginRight: 4 }}>
        <AddIcon />
      </span>
      <MuiTypography variant="body2" fontWeight={600}>
        New
      </MuiTypography>
    </div>
  );
};

export default AddButton;
