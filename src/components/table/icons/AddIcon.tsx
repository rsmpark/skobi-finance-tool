import MuiAddIcon from "@mui/icons-material/Add";
import { SvgIconProps } from "@mui/material";

const AddIcon = (props: SvgIconProps) => {
  return <MuiAddIcon sx={{ fontSize: "18px" }} {...props} />;
};

export default AddIcon;
