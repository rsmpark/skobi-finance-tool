import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import { GridDeleteIcon as MuiGridDeleteIcon } from "@mui/x-data-grid/material/icons";

const DeleteButton = (props: IconButtonProps) => (
  <MuiIconButton {...props}>
    <MuiGridDeleteIcon sx={{ fontSize: "18px" }} />
  </MuiIconButton>
);

export default DeleteButton;
