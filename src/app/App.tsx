import MuiStack from "@mui/material/Stack";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import "../assets/css/fonts.css";

import HallTipCalculator from "@components/hallTipCalculator/HallTipCalculator";
import TipCalculator from "@components/tipCalculator/TipCalculator";
import theme from "@themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        <TipCalculator />
        <HallTipCalculator />
      </MuiStack>
    </ThemeProvider>
  );
}
