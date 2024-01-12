import { StandardTextFieldProps } from "@mui/material/TextField";

export interface NumberMaskOptions {
  prefix: string;
  suffix: string;
  includeThousandsSeparator: boolean;
  thousandsSeparatorSymbol: string;
  allowDecimal: boolean;
  decimalSymbol: string;
  decimalLimit: number;
  requireDecimal: boolean;
  allowNegative: boolean;
  allowLeadingZeroes: boolean;
  integerLimit: number;
}
export interface CurrnecyInputProps extends StandardTextFieldProps {
  maskOptions?: NumberMaskOptions;
  setValue: (value: string) => void;
  value: string;
}

export interface MaskInputRenderProps {
  inputRef: React.Ref<HTMLInputElement>;
}
