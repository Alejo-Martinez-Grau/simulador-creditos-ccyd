import React from "react";
import { Slider, OutlinedInput, Box, Grid, Typography, ThemeProvider,} from "@material-ui/core";
import sliderTheme from "./slidersTheme";

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
        <Grid item xs={4}>
        <OutlinedInput
          fullWidth
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
      </Grid>

      <Slider
        
        // className={classes.sliderStyle}
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
    </ThemeProvider>
  );
};

export default CuotasSlider;
