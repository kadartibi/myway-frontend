import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    paddingLeft: "15px",
    paddingRight: "15px",
    transform: "scale(0.8)"
  },
  card: {
    minWidth: 1000,
    maxWidth: 1000
  },
  pointer: {
    cursor: "pointer"
  },
  content: {
    fontStyle: "italic",
    cursor: "default"
  }
});

export default function Trip(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const trip = props.trip;

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.pointer}
        titleTypographyProps={{ variant: "h5" }}
        title={trip.name}>
        </CardHeader>
      <Divider />
      <CardContent className={classes.content}>
        <Typography align="center" variant="h6">
          {trip.country}
          {bull}From: {trip.dateOfDeparture}
          {bull}To: {trip.dateOfReturn}
          {bull}Rating: {trip.rating}
        </Typography>
      </CardContent>
    </Card>
  );
}
