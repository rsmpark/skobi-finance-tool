import MuiAttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import MuiInputAdornment from "@mui/material/InputAdornment";
import MuiTextField from "@mui/material/TextField";
import MuiTypography from "@mui/material/Typography";
import { ChangeEvent, FC, forwardRef } from "react";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
import { createNumberMask } from "text-mask-addons";

import { CurrnecyInputProps } from "./CurrencyInput.types";

const defaultMaskOptions = {
  prefix: "$",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2,
  allowNegative: false,
  allowLeadingZeroes: false,
};

const MuiInput = forwardRef(({ name, placeholder, onChange }: MaskedInputProps, ref) => {
  return (
    <MuiTextField
      inputRef={ref}
      name={name}
      size="small"
      placeholder={placeholder}
      fullWidth
      sx={{
        input: { textAlign: "right" },
      }}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <MuiInputAdornment position="start">
            <MuiAttachMoneyRoundedIcon sx={{ color: "hsl(184, 14%, 56%)" }} />
          </MuiInputAdornment>
        ),
      }}
    />
  );
});

const CurrencyInput: FC<CurrnecyInputProps> = ({ maskOptions, setValue, ...props }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return (
    <>
      <MuiTypography variant="subtitle2" gutterBottom>
        {props.label}
      </MuiTypography>
      <MaskedInput
        mask={currencyMask}
        placeholder="0"
        id={props.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        render={(ref, props) => {
          return <MuiInput mask={false} ref={ref} {...props} />;
        }}
      />
    </>
  );
};

export default CurrencyInput;
