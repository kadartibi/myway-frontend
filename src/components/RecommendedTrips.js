import React, { useContext } from "react";
import { TripContext } from "../components/Context/TripContext";
import Trip from "../components/Trip";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { makeStyles } from '@material-ui/core';

function RecommendedTrips() {
  const [trips] = useContext(TripContext);

  return trips ? (
    <Grid container justify="center" spacing={2}>
      {trips.map(trip => (
        <Grid item key={trip.id}>
          <Trip trip={trip} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <CircularProgress />
  );
}

export default RecommendedTrips;
