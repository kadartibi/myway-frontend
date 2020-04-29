import React from "react";
import Trip from "./Trip";
import CopyTripButton from "../components/CopyTripButton";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Backdrop from "@material-ui/core/Backdrop";
import GeneratePlannedDays from "./GeneratePlannedDays";
import { PlannedDaysProvider } from "./Context/PlannedDaysContext";

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function RecommendedTrips(props) {
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
              <GeneratePlannedDays inRecommended={inRecommended}/>
            </PlannedDaysProvider>
          </ExpansionPanelDetails>
          {inRecommended ? <CopyTripButton trip={trip} /> : null}          
        </ExpansionPanel>
      ))}
    </Grid>
  ) : (
    <h2>No trips to display yet</h2>
  );
}

export default RecommendedTrips;
