import { createTheme } from "@mui/material/styles";
import { blue, teal, grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: blue[700],
    },
    secondary: {
      main: teal[600],
    },
    background: {
      default: grey[50],
      paper: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[400],
    },
    secondary: {
      main: teal[300],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
});
