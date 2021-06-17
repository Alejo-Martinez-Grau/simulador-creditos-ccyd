import React from "react";
import { Slider, OutlinedInput, Box, Grid, Typography, ThemeProvider,} from "@material-ui/core";
import sliderTheme from "./slidersTheme";

const CuotasSlider = ({valueCuotas, onValueCuotasChange}) => {

  const handleSliderChange = (event, newValue) => {
    onValueCuotasChange(newValue);
  };

  const handleInputChange = (event) => {
    onValueCuotasChange(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (valueCuotas < 3) {
      onValueCuotasChange(3);
    } else if (valueCuotas > 24) {
      onValueCuotasChange(24);
    }
  };

  const marks = [
    {
      value: 3,
      label: "3",
    },
    {
      value: 24,
      label: "24",
    },
  ];
  return (
    <ThemeProvider theme={sliderTheme}>
    <Box>
      <Grid
         container
         direction="row"
         justify="space-between"
         alignItems="center"
      >
          <Box color='primary.main' >
        <Typography variant='body1'><Box fontWeight='fontWeightLight'> PLAZO:</Box></Typography>
        </Box>
        <Grid item xs={5} sm={4}>
        <OutlinedInput
          fullWidth
        variant="outlined"
          value={valueCuotas}
          margin="dense"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 3,
            max: 24,
            type: "number",
            "aria-labelledby": "cuotas-slider",
          }}
        />
        </Grid>
      </Grid>

      <Slider
        
        // className={classes.sliderStyle}
        defaultValue={3}
        aria-labelledby="cuotas-slider"
        valueLabelDisplay="auto"
        
        step={1}
        marks={marks}
        min={3}
        max={24}
        value={typeof valueCuotas === "number" ? valueCuotas : 0}
        onChange={handleSliderChange}
      />
    </Box>
    </ThemeProvider>
  );
};

export default CuotasSlider;
