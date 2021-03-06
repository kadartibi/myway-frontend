import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import KeyboardDatePickerTest from "./DatePicker";
import CheckboxLabels from "./TravelTypeCheckbox";
import { NewTripContext } from "./Context/NewTripContext";
import Grid from "@material-ui/core/Grid";
import NewTripErrorHandler from "./NewTripErrorHandler";

const useStyles = makeStyles({
  root: {
    marginTop: "50px",
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
  const { setTripName, setCountry, setCity, sendToServer } = useContext(NewTripContext);
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <NewTripErrorHandler />
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h3> Trip details:</h3>
                <form noValidate autoComplete="off">
                  <TextField
                    required
                    className="tripInput"
                    id="standard-basic"
                    label="Trip name"
                    onChange={e => {
                      setTripName(e.target.value);
                    }}
                    onSubmit={e => (e.target.value = null)}
                  />
                  <br />
                  <TextField
                    required
                    className="tripInput"
                    id="standard-basic"
                    label="Country"
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
