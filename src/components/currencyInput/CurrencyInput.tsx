import MuiAttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import MuiInputAdornment from "@mui/material/InputAdornment";
import MuiTextField from "@mui/material/TextField";
import MuiTypography from "@mui/material/Typography";
import { ChangeEvent, FC } from "react";

import { Props } from "./CurrencyInput.types";

const CurrencyInput: FC<Props> = ({ value, setValue, ...props }) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   validateValue(e.target.value);
  // };

  // const validateValue = (inputValue: string) => {
  //   // Remove non-digit characters from the input value
  //   const numericValue = inputValue.replace(/[^0-9]/g, "");

  //   // Format the numeric value as a currency string
  //   const formattedValue = new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(Number(numericValue) / 100);

  //   setValue(formattedValue);
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters except for the first period
    const numericString = e.target.value.replace(/[^\d.]/g, "");
    console.log(
      "🚀 ~ file: currencyInput.tsx:30 ~ handleChange ~ numericString:",
      numericString
    );

    // Ensure only one period is present
    const periodIndex = numericString.indexOf(".");
    if (periodIndex !== -1) {
      const integerPart = numericString.slice(0, periodIndex);
      const decimalPart = numericString.slice(periodIndex + 1).replace(/\./g, "");
      const formattedValue = parseFloat(`${integerPart}.${decimalPart}`).toLocaleString(
        "en-US",
        {
          minimumFractionDigits: 0,
          maximumFractionDigits: Math.min(decimalPart.length, 2),
        }
      );
      setValue(formattedValue);
    } else {
      const formattedValue = parseFloat(numericString).toLocaleString("en-US");
      setValue(formattedValue);
    }
  };

  return (
    <>
      <MuiTypography variant="subtitle2" gutterBottom>
        {props.label}
      </MuiTypography>
      <MuiTextField
        name={props.name}
        size="small"
        placeholder="0"
        value={value}
        fullWidth
        sx={{
          input: { textAlign: "right" },
        }}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <MuiInputAdornment position="start">
              <MuiAttachMoneyRoundedIcon sx={{ color: "hsl(184, 14%, 56%)" }} />
            </MuiInputAdornment>
          ),
        }}
      />
    </>
  );
};

export default CurrencyInput;
