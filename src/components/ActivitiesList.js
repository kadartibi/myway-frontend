import React from 'react'
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

export default function Activities() {
    const test = [
        { "This is an activity": "15.00" },
        { "Another activity": "20.00" }
      ];
    
    return test.map(activity => (
        <List>
        {generate(
          <React.Fragment>
            <ListItem>
              <ListItemText>
                {Object.keys(activity)} - {Object.values(activity)} $
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
    ));
}
