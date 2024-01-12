import MuiPaper from "@mui/material/Paper";
import MuiStack from "@mui/material/Stack";

const HallTipCalculator = () => {
  return (
    <MuiPaper
      component="form"
      elevation={1}
      sx={{ maxWidth: 800, padding: 4, borderRadius: 4 }}
    >
      <MuiStack direction={{ xs: "column", md: "row" }} spacing={5}></MuiStack>
    </MuiPaper>
  );
};

export default HallTipCalculator;
