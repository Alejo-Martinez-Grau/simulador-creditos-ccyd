import React from "react";
import {
  Container,
  Grid,
  Button,
  Box,
  Typography,
  Paper,
  ThemeProvider 
} from "@material-ui/core";
import CuotasSlider from "./CuotasSlider";
import PrestamoSlider from "./PrestamoSlider";
import customTheme from "./customTheme";


function App() {
  const [valueCuotas, setValueCuotas] = React.useState(24);
  const [valuePrestamo, setValuePrestamo] = React.useState(50000);

  const cuotaFija = (Math.round((valuePrestamo/valueCuotas) * 197.98) / 100).toFixed(2);

  return (
    <ThemeProvider theme={customTheme}>

      {/* Marco */}
      <Container maxWidth="sm">
        <Box p={2} bgcolor="secondary.main">
          <Paper>
            <Box bgcolor="bg1.main">
              <Container>
                
                {/* Título */}
                <Box p={4} color="default.main">
                  <Typography component="h1" variant="h4" align="center">
                    <Box fontWeight='fontWeightBold'> Simulá tu crédito</Box>
                  </Typography>
                </Box>

                {/* Sliders */}
                <Box  px={3}>
                  <PrestamoSlider valuePrestamo={valuePrestamo} onValuePrestamoChange={setValuePrestamo} />
                </Box>
                <Box py={2} px={3}>
                  <CuotasSlider valueCuotas={valueCuotas} onValueCuotasChange={setValueCuotas} />
                </Box>

                {/*Caja con Valor de Cuota */}
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
                      <Box fontWeight="fontWeightBold">{cuotaFija}</Box>
                    </Typography>
                  </Grid>
                </Box>

                {/* Botones */}
                <Box pb={4}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  gutterBottom
                  spacing={1}
                >
                  <Grid item xs={8}>
                  <Box>
                    <Button variant="contained" color="primary" size='large' onClick={()=> (console.log('Boton: Obtené Crédito.'))} fullWidth>
                    <Box fontWeight="fontWeightMedium" fontSize={20}>OBTENÉ CRÉDITO</Box>
                    </Button>
                  </Box>
                  </Grid>
                  <Grid item xs={4}>
                  <Box>
                    <Button variant="contained" color="secondary" size='small' onClick={()=> (console.log('Boton: Ver detalle de cuotas.'))}>
                      <Box fontSize={12}> VER DETALLE DE CUOTAS </Box>
                    </Button>
                  </Box>
                  </Grid>
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
