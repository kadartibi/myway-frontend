import React, { useContext } from "react";
import PlannedDay from "./PlannedDay";
import { PlannedDaysContext } from "./Context/PlannedDaysContext";

import { makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1000,
    display: "inline-block"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

export default function GeneratePlannedDays() {
  const [plannedDays] = useContext(PlannedDaysContext);
  const classes = useStyles();

  return plannedDays ? (
    <div className={classes.root}>
      {plannedDays.map(day => (
        <PlannedDay key={day.id} day={day} />
      ))}
    </div>
  ) : (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
