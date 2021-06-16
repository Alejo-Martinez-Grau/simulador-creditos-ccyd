import React from "react";
import { Slider, OutlinedInput, Box, Grid, Typography } from "@material-ui/core";

const CuotasSlider = () => {
  const [value, setValue] = React.useState(24);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 24) {
      setValue(24);
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
    <Box>
      <Grid
         container
         direction="row"
         justify="space-between"
         alignItems="center"
      >
          <Box color='default.main' >
        <Typography variant='h6'>Plazo:</Typography>
        </Box>
        <OutlinedInput
        color='primary'
        variant="outlined"
          value={value}
          margin="dense"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 3,
            min: 3,
            max: 24,
            type: "number",
            "aria-labelledby": "cuotas-slider",
          }}
        />
      </Grid>

      <Slider
        
        defaultValue={3}
        aria-labelledby="cuotas-slider"
        valueLabelDisplay="auto"
        
        step={3}
        marks={marks}
        min={3}
        max={24}
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
      />
    </Box>
  );
};

export default CuotasSlider;
