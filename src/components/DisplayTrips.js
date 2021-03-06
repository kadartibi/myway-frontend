import React, { useContext, useEffect } from "react";
import Trip from "./Trip";
import CopyTripButton from "../components/CopyTripButton";
import RecommendButton from "../components/RecommendButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GeneratePlannedDays from "./GeneratePlannedDays";
import { PlannedDaysProvider } from "./Context/PlannedDaysContext";
import { UserContext } from "../components/Context/UserContext";
import { RecommendedTripContext } from "../components/Context/RecommendedTripContext";

import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  panel: {
    marginBottom: "10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  travelTypes: {
    cursor: "pointer",
    minWidth: 1000,
    maxWidth: 1000,
  },
  closingButtons: {
    marginBottom: "20px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  noTrip: {
    color: "#fff",
    textShadow: "3px 3px #000"
  }
}));

function RecommendedTrips(props) {
  const { recommendedTrips } = useContext(RecommendedTripContext);
  useEffect(() => {
  },[recommendedTrips]);

  const { userName } = useContext(UserContext);
  const trips = props.trips;
  const inRecommended = props.inRecommended;
  const classes = useStyles();

  return trips.length !== 0 ? (
    <Grid container justify="center">
      {trips.map((trip) => (
        <ExpansionPanel className={classes.panel} key={trip.id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid item>
              <Trip trip={trip} />
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <PlannedDaysProvider tripId={trip.id}>
              <GeneratePlannedDays inRecommended={inRecommended} />
            </PlannedDaysProvider>
          </ExpansionPanelDetails>
          <div className={classes.closingButtons}>
            {inRecommended && userName !== undefined ? (
            <CopyTripButton trip={trip} /> 
            ) : null}
            {inRecommended && userName !== undefined 
            && userName !== trip.tripUserId && !trip.ratings.includes(userName) ? (
              <RecommendButton trip={trip} />
            ) : inRecommended && userName !== undefined ? 
              (<Button variant="outlined" size="small" disabled>Recommend Trip</Button>) : null}
            
          </div>
        </ExpansionPanel>
      ))}
    </Grid>
  ) : (
    <div className={classes.noTrip}>
    <Typography variant="h4">No trips to display yet!</Typography>
    </div>
  );
}

export default RecommendedTrips;
