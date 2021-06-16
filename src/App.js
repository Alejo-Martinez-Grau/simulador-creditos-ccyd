import React from "react";
import { Container, Grid, Button, Box, Typography, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./App.css";
import CuotasSlider from "./CuotasSlider";
import PrestamoSlider from "./PrestamoSlider";

const customTheme = createMuiTheme({
  palette: {
    //#00365C #013C68 #004B7D  #07508C #00AD91 #F2FBFF
    primary: {
      main: "#013C68",
    },
    secondary: {
      main: "#07508C",
    }, //
    default: {
      main: "#00AD91",
    },
    inherit: {
      main: "#00243d",
    },
  },
});

function App() {
  return (
    //theme={customTheme}
    
    
    <ThemeProvider>
      <Container maxWidth='sm'>
      <Paper>
        <Container>
        <Typography component="h1" variant="h4" align="center">
            Simulá tu crédito
          </Typography>
          <Box>
          <PrestamoSlider />
        </Box>
        <Box>
          <CuotasSlider />
        </Box>

        <Box>
          <Typography>CUOTA FIJA POR MES: $2,500.90</Typography>
        </Box>
        
        <Grid container direction="row" justify="space-evenly" alignItems="center" >
          <Box item xs={9} padding={3}>
            <Button variant="contained" color="primary" >
              OBTENÉ CRÉDITO
            </Button>
          </Box>
          <Box item xs={3}>
            <Button variant="contained" color="secondary">
              VER DETALLE DE CUOTAS
            </Button>
          </Box>
        </Grid>
        </Container>
        </Paper>
      </Container>
    </ThemeProvider>

    
  );
}

export default App;
