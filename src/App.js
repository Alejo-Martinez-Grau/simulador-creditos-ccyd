import React from "react";
import {
  Container,
  Grid,
  Button,
  Box,
  Typography,
  Paper,
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import CuotasSlider from "./CuotasSlider";
import PrestamoSlider from "./PrestamoSlider";

const customTheme = createMuiTheme({
  typography: {
    fontFamily: ["montserrat"].join(","),
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
      main: "#F2FBFF",
    },
    bg1: {
      main: "#00365C",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="sm">
        <Box p={2} bgcolor="secondary.main">
          <Paper>
            <Box bgcolor="bg1.main">
              <Container>
                <Box p={4} color="default.main">
                  <Typography component="h1" variant="h4" align="center">
                    Simulá tu crédito
                  </Typography>
                </Box>
                <Box  px={3}>
                  <PrestamoSlider m />
                </Box>
                <Box py={2} px={3}>
                  <CuotasSlider />
                </Box>

                <Box color="default.main" bgcolor='#00243d' p={1}>
                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                  >
                    <Typography align="center" variant="h6">
                      CUOTA FIJA POR MES:
                    </Typography>

                    <Typography align="center" variant="h4">
                      <Box fontWeight="fontWeightBold">$2,500.90</Box>
                    </Typography>
                  </Grid>
                </Box>

                <Box pb={4}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  gutterBottom
                >
                  <Box item xs={9} py={1}>
                    <Button variant="contained" color="primary">
                      OBTENÉ CRÉDITO
                    </Button>
                  </Box>
                  <Box item xs={3}>
                    <Button variant="contained" color="secondary">
                      VER DETALLE DE CUOTAS
                    </Button>
                  </Box>
                </Grid>
                </Box>
              </Container>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
