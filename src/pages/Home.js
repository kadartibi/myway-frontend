import React from 'react';
import { makeStyles } from '@material-ui/core';
import { TripProvider } from "../components/Context/TripContext";
import RecommendedTrips from "../components/RecommendedTrips";

const useStyles = makeStyles({
    root: {
        margin: "auto",
        align: "center"
    },
});


export default function Home() {

    const classes = useStyles();

    return (
        <TripProvider>
            <RecommendedTrips class={classes.root}/>
        </TripProvider>
    )
}
