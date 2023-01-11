import React, { useState } from "react";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import "./WaterTracker.css";

const WaterTracker = () => {
  const [isFilled, setIsFilled] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const toggleFilledIcon = (index) => {
    const oldValue = isFilled[index];
    const newArray = [...isFilled];
    newArray.splice(index, 1, !oldValue);
    setIsFilled(newArray);
    console.log("hey");
  };

  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: "4px",
        paddingBottom: "10px",
      }}
    >
      <center>
        {" "}
        <h2>Water Tracker</h2>
      </center>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <IconButton aria-label="water" onClick={() => toggleFilledIcon(0)}>
            {isFilled[0] ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="water" onClick={() => toggleFilledIcon(1)}>
            {isFilled[1] ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="water" onClick={() => toggleFilledIcon(2)}>
            {isFilled[2] ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="water" onClick={() => toggleFilledIcon(3)}>
            {isFilled[3] ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="water" onClick={() => toggleFilledIcon(4)}>
            {isFilled[4] ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="water" onClick={() => toggleFilledIcon(5)}>
            {isFilled[5] ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="water" onClick={() => toggleFilledIcon(6)}>
            {isFilled[6] ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="water" onClick={() => toggleFilledIcon(7)}>
            {isFilled[7] ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default WaterTracker;
