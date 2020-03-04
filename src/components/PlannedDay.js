import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import ActivitiesList from "./ActivitiesList";
import Avatar from "@material-ui/core/Avatar";
import DateRangeIcon from "@material-ui/icons/DateRange";

const useStyles = makeStyles({
  root: {
    minWidth: 190,
  },
  display: {},
  form: {},
  action: {
    width: "115px",
    margin: "auto"
  }
});

export default function PlannedDay() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        titleTypographyProps={{ variant: "h5" }}
        title="02-02-2020"
        avatar={
          <Avatar>
            <DateRangeIcon />
          </Avatar>
        }
      />
      <Divider/>
      <CardContent className={classes.display}>
        <ActivitiesList />
        <Typography variant="h6">Total: 35.00 $</Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.form}>
        <form autoComplete="off">
          <TextField id="standard-basic" label="Activity" />
          <TextField id="standard-basic" label="Price" />
        </form>
      </CardContent>
      <CardActions className={classes.action}>
        <Button variant="outlined" size="small">Add activity</Button>
      </CardActions>
    </Card>
  );
}
