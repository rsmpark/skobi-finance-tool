import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import MuiTypography from "@mui/material/Typography";

import ClearIcon from "@components/table/icons/ResetIcon";

const ResetButton = (props: IconButtonProps) => (
  <MuiIconButton {...props}>
    <span className="svg-icon svg-gray" style={{ marginRight: 4 }}>
      <ClearIcon sx={{ fontSize: "18px" }} />
    </span>
    <MuiTypography variant="body2" fontWeight={600}>
      Reset
    </MuiTypography>
  </MuiIconButton>
);

export default ResetButton;
