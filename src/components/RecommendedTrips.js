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
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles(theme => ({
    panel: {
      marginBottom: "10px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      }
    }));
  

function RecommendedTrips() {
  const [trips] = useContext(TripContext);
  const classes = useStyles();


  return trips.length !== 0 ? (
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
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default RecommendedTrips;
