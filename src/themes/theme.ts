import { createTheme } from "@mui/material/styles";

const Colors = {
  // ### Primary
  Strong_cyan: "hsl(172, 67%, 45%)",
  // ### Neutral
  Very_dark_cyan: "hsl(183, 100%, 15%)",
  Dark_grayish_cyan: "hsl(186, 14%, 43%)",
  Grayish_cyan: "hsl(184, 14%, 56%)",
  Light_grayish_cyan: "hsl(185, 41%, 84%)",
  Very_light_grayish_cyan: "hsl(189, 41%, 97%)",
  Light_gray: "hsl(0, 0%, 62%)",
  White: "hsl(0, 0%, 100%)",
};

const theme = createTheme({
  typography: {
    fontWeightMedium: 600,
    fontWeightLight: 400,
    body1: { fontSize: (14 / 16) * 19 },
  },
  palette: {
    mode: "light",
    primary: {
      main: "hsl(172, 67%, 45%)", // Strong cyan
      dark: "hsl(183, 100%, 15%)", // Very dark cyan
      contrastText: "hsl(0, 0%, 100%)", // White
    },
    error: {
      main: "hsl(15,70%,60%)",
    },
    text: {
      primary: "hsl(183, 100%, 15%)", // Very dark cyan
      secondary: "hsl(172, 67%, 45%)", // Strong cyan
      disabled: "hsla(0, 0%, 100%, 0.5)", // White (0.4)
    },
    background: {
      paper: "hsl(0, 0%, 100%)", // White
      default: "hsl(185, 41%, 84%)", // Light grayish cyan
    },
  },

  shadows: [
    "none",
    "0px 48px 100px 0px rgba(17, 12, 46, 0.1)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Space Mono",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          padding: "0.25em 2.75em",
          fontFamily: "Space Mono",
          fontSize: 18,
          color: Colors.Very_dark_cyan,
          backgroundColor: Colors.Strong_cyan,
          borderRadius: 6,
          "&:hover": {
            color: Colors.Very_dark_cyan,
            backgroundColor: Colors.Light_grayish_cyan,
          },
          "&.Mui-disabled": {
            color: Colors.Dark_grayish_cyan,
            backgroundColor: "hsl(183.1,72%,13%)",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: "Space Mono",
          borderRadius: "50%",
          color: Colors.Light_gray,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Space Mono",
          fontSize: 18,
          color: Colors.Very_dark_cyan,
          backgroundColor: Colors.Very_light_grayish_cyan,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "lightgray",
            borderWidth: "2px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: Colors.Strong_cyan,
          },
          "&:focus": {
            border: "10px solid red",
          },
        },

        notchedOutline: {
          borderColor: "lightgray",
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "Space Mono",
          fontSize: 14,
          color: Colors.Light_gray,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "lightgray",
            borderWidth: "2px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: Colors.Strong_cyan,
          },
          "&:focus": {
            border: "10px solid red",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Space Mono",
          color: Colors.Very_dark_cyan,
        },
      },
    },
  },
});

export default theme;
