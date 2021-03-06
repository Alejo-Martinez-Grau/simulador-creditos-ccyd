import {createMuiTheme } from "@material-ui/core/styles";

const sliderTheme = createMuiTheme({
    typography: {
      fontFamily: ["montserrat"].join(","),
    },
    shape: {
      borderRadius: 0,
    },

    text:{
      color: '#FFF'
    },
  
    palette: {
      //#00365C #013C68 #004B7D  #07508C #00AD91 #F2FBFF
      primary: {
        main: "#fff",
        
      },
      text: {
        primary: "#FFF",
        secondary:"#FFF"
      }
      },
  });
  
  export default sliderTheme;