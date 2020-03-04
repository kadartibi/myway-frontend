import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import KeyboardDatePickerTest from "./DatePicker";
import CheckboxLabels from "./TravelTypeCheckbox";

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
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <form noValidate autoComplete="off">
              <TextField
                className="tripInput"
                id="standard-basic"
                label="Trip name"
              />
              <br />
              <TextField
                className="tripInput"
                id="standard-basic"
                label="Country"
              />
              <br />
              <TextField
                className="tripInput"
                id="standard-basic"
                label="City"
              />
              <br />
              <TextField
                className="tripInput"
                id="standard-basic"
                label="Traveltype"
              />
              <br />
              <KeyboardDatePickerTest />
              <br />
              <CheckboxLabels />
            </form>
          </CardContent>
          <CardActions className={classes.action}>
            <Button size="small">Submit trip</Button>
          </CardActions>
        </Card>
      </React.Fragment>
    </div>
  );
};
