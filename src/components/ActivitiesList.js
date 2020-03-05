import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function Activities(props) {
  let activities = props.activities;
  let setActivities = props.setActivities;
  let tripId = props.tripId;
  let dayId = props.dayId;

  const handleActivitiesPost = (activity) => {
    axios
      .post(
        "http://localhost:8080/trip/" + tripId + "/update-activities/" + dayId,
        {
          description: activity.description,
          price : activity.price
        }
      )
      .then(function(response) {
        console.log(response.data.activities);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const deleteActivity = activityToDelete => {
    setActivities(activities.filter(activity => activity !== activityToDelete));
    handleActivitiesPost(activityToDelete);
  };

  return activities.length !== 0 ? (
    activities.map(activity => (
      <List>
        {generate(
          <React.Fragment>
            <ListItem>
              <ListItemText>
                {activity.description} - {activity.price} $
              </ListItemText>
              <ListItemSecondaryAction onClick={() => deleteActivity(activity)}>
                <IconButton edge="end">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </React.Fragment>
        )}
      </List>
    ))
  ) : (
    <div>No activities added</div>
  );
}
