import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64C162",
      contrastText: "#FFF"      
    },
    secondary: {
      main: "#31175B",
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});
