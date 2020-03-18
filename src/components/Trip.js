import React from 'react';
import { makeStyles, Card, CardContent, CardHeader, Divider,
    Typography } from '@material-ui/core';

const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        paddingLeft: '15px',
        paddingRight: '15px',
        transform: 'scale(0.8)',
      },
    card: {
        cursor: "pointer",
        minWidth: 1000,
        maxWidth: 1000,
    },
    content: {
        fontStyle: "italic",
    },
});



export default function Trip(props) {
    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
    return (
        <Card className={classes.card}>
            <CardHeader
                titleTypographyProps={{ variant: "h5" }}
                title={props.trip.name} />
            <Divider/>
            <CardContent className={classes.content}>
                <Typography align='center' variant="h6">{props.trip.country}{bull}From: {props.trip.dateOfDeparture}
                    {bull}To: {props.trip.dateOfReturn}{bull}Total cost: {props.trip.totalCost}${bull}Rating: {props.trip.rating}</Typography>
               
            </CardContent>
        </Card>
    )
}

