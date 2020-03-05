import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function Activities(props) {
  const activities = props.activities;

  return activities.length !== 0 ? (
    activities.map(activity => (
      <List>
        {generate(
          <React.Fragment>
            <ListItem>
              <ListItemText>
                {activity.description} - {activity.price} $
              </ListItemText>
              <ListItemSecondaryAction>
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
