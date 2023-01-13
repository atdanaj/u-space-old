import React, { useState, useEffect } from "react";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { useQuery, useMutation } from "@apollo/client";
import "./WaterTracker.css";
import { GET_WATER, INSERT_WATER, UPDATE_WATER } from "../graphql/queries";

const WaterTracker = ({ user }) => {
  //const [newWater, setNewWater] = useState(0);
  const today = new Date().toISOString().split("T")[0];
  const { loading, error, data } = useQuery(GET_WATER, {
    variables: { id: user, date: today },
  });
  const ounces = data?.water[0] ? data.water[0].ounces : 0;
  const updateAddCache = (cache, { data }) => {
    const existingWater = cache.readQuery({
      query: GET_WATER,
      variables: { id: user, date: today },
    });

    const newWater = data.insert_water;
    cache.writeQuery({
      query: GET_WATER,
      variables: { id: user, date: today },
      data: { water: [...existingWater.water, newWater] },
    });
  };

  const updateCache = (cache, { data }) => {
    const existingWater = cache.readQuery({
      query: GET_WATER,
      variables: { id: user, date: today },
    });

    const updatedWater = existingWater.water.map((water) => {
      return { ...water, ounces: data.update_water.returning[0].ounces };
    });
    cache.writeQuery({
      query: GET_WATER,
      variables: { id: user, date: today },
      data: { water: updatedWater },
    });
  };

  const [insertWaterMutation] = useMutation(INSERT_WATER, {
    update: updateAddCache,
  });

  const [updateWaterMutation] = useMutation(UPDATE_WATER, {
    update: updateCache,
  });

  const firstDrink = () => {
    if (ounces === 8) {
      updateWaterMutation({ variables: { id: user, ounces: 0, date: today } });
    } else {
      insertWaterMutation({ variables: { id: user, ounces: 8 } });
    }
  };

  const toggleWaters = (newOunces) => {
    if (ounces === newOunces) {
      updateWaterMutation({
        variables: { id: user, ounces: newOunces - 8, date: today },
      });
    } else {
      updateWaterMutation({
        variables: { id: user, ounces: newOunces, date: today },
      });
    }
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
          <IconButton
            aria-label="water"
            disabled={ounces > 8}
            onClick={firstDrink}
          >
            {ounces >= 8 ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="water"
            disabled={ounces > 16 || ounces < 8}
            onClick={() => toggleWaters(16)}
          >
            {ounces >= 16 ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="water"
            disabled={ounces > 24 || ounces < 16}
            onClick={() => toggleWaters(24)}
          >
            {ounces >= 24 ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="water"
            disabled={ounces > 32 || ounces < 24}
            onClick={() => toggleWaters(32)}
          >
            {ounces >= 32 ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="water"
            disabled={ounces > 40 || ounces < 32}
            onClick={() => toggleWaters(40)}
          >
            {ounces >= 40 ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="water"
            disabled={ounces > 48 || ounces < 40}
            onClick={() => toggleWaters(48)}
          >
            {ounces >= 48 ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="water"
            disabled={ounces > 56 || ounces < 48}
            onClick={() => toggleWaters(56)}
          >
            {ounces >= 56 ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="water"
            disabled={ounces > 64 || ounces < 56}
            onClick={() => toggleWaters(64)}
          >
            {ounces >= 64 ? <LocalDrinkIcon /> : <LocalDrinkOutlinedIcon />}
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default WaterTracker;
