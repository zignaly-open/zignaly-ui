import { PaletteMode } from "@mui/material";

const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#F5F5F5" : "#00dddd",
    },
    secondary: {
      main: "#326eb3",
    },
    text: {
      primary: "#172B4D",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default getTheme;
