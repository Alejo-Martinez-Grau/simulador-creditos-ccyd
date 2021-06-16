import React from "react";
import { Slider, OutlinedInput, Box, Grid, Typography, InputAdornment } from "@material-ui/core";

const PrestamoSlider = () => {
  const [value, setValue] = React.useState(50000);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 50000) {
      setValue(50000);
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
    <Box>
      <Grid
         container
         direction="row"
         justify="space-between"
         alignItems="center"
      >
        <Typography variant='h6'>Monto Total:</Typography>
        <OutlinedInput
        color='primary'
        variant="outlined"
          value={value}
          margin="dense"
          onChange={handleInputChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 5000,
            max: 50000,
            type: "number",
            "aria-labelledby": "cuotas-slider",
          }}
        />
      </Grid>

      <Slider
        defaultValue={50000}
        aria-labelledby="cuotas-slider"
        valueLabelDisplay="auto"
        
        step={1}
        marks={marks}
        min={5000}
        max={50000}
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
      />
    </Box>
  );
};

export default PrestamoSlider;
