import React, { useContext } from "react";
import { TripContext } from "../components/Context/TripContext";
import Trip from "../components/Trip";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from '@material-ui/core';

function RecommendedTrips() {
  const [trips] = useContext(TripContext);

  const useStyles = makeStyles(theme => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    }
  }));

  const classes = useStyles();

  return trips.length !== 0 ? (
    <Grid container justify="center" spacing={2}>
      {trips.map(trip => (
        <Grid item key={trip.id}>
          <Trip trip={trip} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default RecommendedTrips;
