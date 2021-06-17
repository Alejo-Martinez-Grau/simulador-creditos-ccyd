import React from "react";
import { Slider, OutlinedInput, Box, Grid, Typography, InputAdornment, ThemeProvider } from "@material-ui/core";
import sliderTheme from "./slidersTheme";



const PrestamoSlider = ({valuePrestamo, onValuePrestamoChange}) => {
 

  const handleSliderChange = (event, newValue) => {
    onValuePrestamoChange(newValue);
  };

  const handleInputChange = (event) => {
    onValuePrestamoChange(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (valuePrestamo < 5000) {
      onValuePrestamoChange(5000);
    } else if (valuePrestamo > 50000) {
      onValuePrestamoChange(50000);
    }
  };

  const marks = [
    {
      value: 5000,
      label: "$5.000",
    },
    {
      value: 50000,
      label: "$50.000",
    },
  ];
  return (
    <ThemeProvider theme={sliderTheme}>
    <Box color="#FFF">
      <Grid
         container
         direction="row"
         justify="space-between"
         alignItems="center"
      >
        <Typography variant='body1'><Box fontWeight='fontWeightLight'> MONTO TOTAL:</Box></Typography>
        <Grid item sm={4} xs={5}>
        <OutlinedInput
        
        color='primary'
        variant="outlined"
          value={valuePrestamo}
          margin="dense"
          onChange={handleInputChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          onBlur={handleBlur}
          inputProps={{
            step: 500,
            min: 5000,
            max: 50000,
            type: "number",
            "aria-labelledby": "cuotas-slider",
          }}
        />
        </Grid>
      </Grid>

      <Slider
        color='primary'
        defaultValue={50000}
        aria-labelledby="cuotas-slider"
        valueLabelDisplay="auto"
        
        step={500}
        marks={marks}
        min={5000}
        max={50000}
        value={typeof valuePrestamo === "number" ? valuePrestamo : 0}
        onChange={handleSliderChange}
      />
    </Box>
    </ThemeProvider>
  );
};

export default PrestamoSlider;
