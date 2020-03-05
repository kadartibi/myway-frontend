import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Divider from "@material-ui/core/Divider";
import ActivitiesList from "./ActivitiesList";
import Avatar from "@material-ui/core/Avatar";
import DateRangeIcon from "@material-ui/icons/DateRange";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 190,
    maxWidth: 300,
    margin: "10px",
    height: "auto",
    display: "inline-block",
    verticalAlign: "top"
  },
  action: {
    width: "115px",
    margin: "auto"
  }
});

export default function PlannedDay(props) {
  const classes = useStyles();
  const [activityDescriptionInput, setActivityDescriptionInput] = useState();
  const [priceInput, setPriceInput] = useState();
  const [day, setDay] = useState(props.day);
  const [activities, setActivities] = useState(props.day.activities);

  const addActivityDescription = e => {
    setActivityDescriptionInput(e.target.value);
  };

  const addPrice = e => {
    setPriceInput(e.target.value);
  };

  const handlePostRequest = e => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/trip/0/add-activity-to-day/0", {
        description: activityDescriptionInput,
        price: priceInput
      })
      .then(function(response) {
        setDay(response.data);
        setActivities(response.data.activities);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        titleTypographyProps={{ variant: "h5" }}
        title={day.date}
        avatar={
          <Avatar>
            <DateRangeIcon />
          </Avatar>
        }
      />
      <Divider />
      <CardContent className={classes.display}>
        <ActivitiesList
          activities={activities}
          setActivities={setActivities}
          tripId={day.tripId}
          dayId={day.id}
        />
        <Typography variant="h6">Total: {day.totalCost} $</Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.form}>
        <form noValidate autoComplete="off" onSubmit={handlePostRequest}>
          <Input
            id="standard-basic"
            value={null}
            placeholder="Activity"
            onChange={addActivityDescription}
          />
          <Input
            id="standard-basic"
            value={null}
            placeholder="Price"
            onChange={addPrice}
          />
          <CardActions className={classes.action}>
            <Button variant="outlined" size="small" type="submit">
              Add activity
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}
