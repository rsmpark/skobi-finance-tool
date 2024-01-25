import DeleteIcon from "@mui/icons-material/Delete";
import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";

const DeleteButton = (props: IconButtonProps) => (
  <MuiIconButton {...props}>
    <DeleteIcon sx={{ fontSize: "18px" }} />
  </MuiIconButton>
);

export default DeleteButton;
