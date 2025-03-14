import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6957d0",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "10px 20px",
          textTransform: "none",
          fontWeight: 600,
          boxShadow:
            "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
});

theme.shadows[1] = "1px 10px 30px rgba(0, 0, 0, 0.1)";

export default theme;
