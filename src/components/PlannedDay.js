import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    maxWidth: 300,
    minWidth: 275,
    textAlign: "center"
  },
  content: {
    display: "inline-block"
  }
});

export default function PlannedDay() {
  const classes = useStyles();
  const test = { "This is an activity": "15.00" };

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography>
            {Object.keys(test)} - {Object.values(test)} $
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              className="dayInput"
              id="standard-basic"
              label="Activity"
            />
            <TextField className="dayInput" id="standard-basic" label="Price" />
          </form>
        </CardContent>
        <CardActions className={classes.action}>
          <Button size="small">Add activity</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
