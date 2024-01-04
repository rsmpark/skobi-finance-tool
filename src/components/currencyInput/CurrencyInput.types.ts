import { StandardTextFieldProps } from "@mui/material";

export interface Props extends StandardTextFieldProps {
  value: string;
  setValue: (value: string) => void;
}
