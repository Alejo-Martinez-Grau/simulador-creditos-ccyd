import {createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
    typography: {
      fontFamily: ["montserrat"].join(","),
    },
    shape: {
      borderRadius: 0,
    }, 
  
    palette: {
      //#00365C #013C68 #004B7D  #07508C #00AD91 #F2FBFF
      primary: {
        main: "#00AD91",
        contrastText: "#fff",
      },
      secondary: {
        main: "#07508C",
      },
      default: {
        main: "#FFF",
      },
      bg1: {
        main: "#00365C",
      },
    },
  });
  
  export default customTheme;