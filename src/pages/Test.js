import React, { useContext } from "react";
import PlannedDay from "../components/PlannedDay";
import { makeStyles } from '@material-ui/core';
import { PlannedDaysContext } from "../components/Context/PlannedDaysContext";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: 1000,
    height: 600,
  },
}));

export default function Test() {
  const [plannedDays] = useContext(PlannedDaysContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList} cols={3}>
        {plannedDays.map(day => (
          <GridListTile key={day.id}>
            <PlannedDay day={day}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}