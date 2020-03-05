import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import KeyboardDatePickerTest from "./DatePicker";
import CheckboxLabels from "./TravelTypeCheckbox";
import { NewTripContext } from "./Context/NewTripContext";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
    margin: "auto",
    maxWidth: "50%",
    minWidth: "300",
    textAlign: "center"
  },
  content: {
    display: "inline-block"
  }
});

export const AddNewTripForm = () => {
  const [
    tripName,
    setTripName,
    country,
    setCountry,
    city,
    setCity,
    dateOfDeparture,
    setDateOfDeparture,
    dateOfReturn,
    setDateOfReturn,
    travelType,
    setTravelType,
    sendToServer
  ] = useContext(NewTripContext);
  const classes = useStyles();

  const buttonOnclick = e => {
    window.location.href = "/in-progress";
  };

  return (
    <div>
      <React.Fragment>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h3> Trip details:</h3>
                <form noValidate autoComplete="off">
                  <TextField
                    className="tripInput"
                    id="standard-basic"
                    label="Trip name"
                    value={null}
                    onChange={e => {
                      setTripName(e.target.value);
                    }}
                  />
                  <br />
                  <TextField
                    className="tripInput"
                    id="standard-basic"
                    label="Country"
                    value={null}
                    onChange={e => {
                      setCountry(e.target.value);
                    }}
                  />
                  <br />
                  <TextField
                    className="tripInput"
                    id="standard-basic"
                    label="City"
                    value={null}
                    onChange={e => {
                      setCity(e.target.value);
                    }}
                  />
                </form>
              </Grid>
              <Grid item xs={6}>
                <KeyboardDatePickerTest />
              </Grid>
              <Grid item xs={12}>
                <h3>Traveltype:</h3>
                <CheckboxLabels />
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              size="small"
              onClick={sendToServer}
              to="/in-progress"
            >
              Submit trip
            </Button>
          </CardContent>
        </Card>
      </React.Fragment>
    </div>
  );
};
