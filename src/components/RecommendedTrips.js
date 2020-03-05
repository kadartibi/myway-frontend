import React, { useContext } from "react";
import { TripContext } from "../components/Context/TripContext";
import Trip from "../components/Trip";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    panel: {
      marginBottom: "10px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  

function RecommendedTrips() {
  const [trips] = useContext(TripContext);
  const classes = useStyles();

  return trips ? (
    <Grid container justify="center" spacing={0}>
      {trips.map(trip => (
        <ExpansionPanel className={classes.panel} key={trip.id} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Grid item >
                <Trip  trip={trip} />
            </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              
                
          </Typography>
        </ExpansionPanelDetails>
        </ExpansionPanel>
        
      ))}
    </Grid>
  ) : (
    <CircularProgress />
  );
}

export default RecommendedTrips;