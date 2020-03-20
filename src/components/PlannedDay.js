import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
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
  },
  inactivePointer: {
    cursor: "default"
  }
});

export default function PlannedDay(props) {
  const classes = useStyles();
  const [activityDescriptionInput, setActivityDescriptionInput] = useState();
  const [priceInput, setPriceInput] = useState();
  const [day, setDay] = useState(props.day);
  const [activities, setActivities] = useState(props.day.activities);
  const [totalCost, setTotalCost] = useState(props.day.totalCost);

  const addActivityDescription = e => {
    setActivityDescriptionInput(e.target.value);
  };

  const addPrice = e => {
    setPriceInput(e.target.value);
  };

  const updateTotalCost = () => {
    let sumResult = 0;
    for (let activity of activities) {
      sumResult += activity.price;
    }
    setTotalCost(sumResult);
    return sumResult;
  };

  const handlePostRequest = e => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/trip/" +
          day.tripId +
          "/add-activity-to-day/" +
          day.id,
        {
          description: activityDescriptionInput,
          price: priceInput
        }
      )
      .then(function(response) {
        setTotalCost(Number(totalCost) + Number(priceInput));
        setDay(response.data);
        setActivities(response.data.activities);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    updateTotalCost();
  });

  return (
    <Box boxShadow={5} className={classes.root}>
      <CardHeader
        className={classes.inactivePointer}
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
          totalCost={totalCost}
          setTotalCost={setTotalCost}
        />
        <Typography className={classes.inactivePointer} variant="h6">
          Total: {totalCost} $
        </Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.form}>
        <form noValidate autoComplete="off" onSubmit={handlePostRequest}>
          <Input
            id="standard-basic"
            className="PlannedDayInputField"
            placeholder="Activity"
            onChange={addActivityDescription}
            required
          />
          <Input
            type="number"
            id="standard-basic"
            className="PlannedDayInputField"
            placeholder="Price"
            onChange={addPrice}
            required
          />
          <CardActions className={classes.action}>
            <Button variant="outlined" size="small" type="submit">
              Add activity
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Box>
  );
}
