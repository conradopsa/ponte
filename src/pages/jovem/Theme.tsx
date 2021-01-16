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
      fontFamily: 'Open Sans, sans-serif'
    },
    body1: {
      fontSize: '18px',
      fontFamily: 'Quicksand, sans-serif'
    },
    body2: {
      fontSize: '12px',
      fontFamily: 'Quicksand, sans-serif'
    },
    subtitle2: {
      fontFamily: 'Open Sans, sans-serif'
    },
    h5: {
      fontSize: '13px'
    }
  }
});
