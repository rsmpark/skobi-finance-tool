import { FC } from "react";

import MuiTypography from "@mui/material/Typography";

import CalculateIcon from "@components/table/icons/CalculateIcon";
import { ActionButtonProps } from "@components/table/Table.types";

const CalculateButton: FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <div className="tr actions-btn" onClick={onClick}>
      <span className="svg-icon svg-gray" style={{ marginRight: 4 }}>
        <CalculateIcon />
      </span>
      <MuiTypography variant="body2" fontWeight={600}>
        Calculate
      </MuiTypography>
    </div>
  );
};

export default CalculateButton;
