import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6C6AE2",
    },
    secondary: {
      main: "#FFF",
    }
  },
  typography: {
    h6: {
      fontSize: '12px',
    },
    body1: {
      fontSize: '18px'
    },
    body2: {
      fontSize: '13px'
    },
    subtitle2: {
      fontFamily: 'Quicksand, sans-serif'
    },
    h5: {
      fontSize: '14px',
      fontFamily: 'Open sans, sans-serif'
    }
  }
});
