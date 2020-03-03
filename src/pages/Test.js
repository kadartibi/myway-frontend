import React from "react";
import PlannedDay from "../components/PlannedDay";
import Grid from "@material-ui/core/Grid";

export default function Test() {
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item xs>
          <PlannedDay />
        </Grid>
        <Grid item xs>
          <PlannedDay />
        </Grid>
        <Grid item xs>
          <PlannedDay />
          </Grid>
      </Grid>
    </div>
  );
}
