import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
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
            <Typography variant="h1">Welcome Travellers</Typography>
            <Typography variant="h4">
                You can find here the best trips from around the world!
                Browse them, rate if you like, amend them for yourself, to fit your needs or plan your dream trip from scratch!
                </Typography>
            <Typography variant="h4">Here are the best ones so far!<br/><br/></Typography>
            <RecommendedTrips class={classes.root}/>
        </TripProvider>
    )
}
