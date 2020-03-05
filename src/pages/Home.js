import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { TripProvider } from "../components/Context/TripContext";
import RecommendedTrips from "../components/RecommendedTrips";

const useStyles = makeStyles({
    header: {
        color: "#000",
        textShadow: "3px 3px #FFF"
        // backgroundColor: "lightgrey",
        // opacity: 0.7


    },
    root: {
        margin: "auto",
        align: "center",
        maxWidth: 1000,
    },
   
    intro: {
        paddingTop: 200,
        color: "#fff",
        textShadow: "3px 3px #000"
        // text-shadow: 2px 2px #FF0000;
    },
    recommended: {
        color: "#fff",
        paddingTop: 200,
        paddingBottom: 40,
        textShadow: "3px 3px #000"
    }
});


export default function Home() {

    const classes = useStyles();

    return (
        <TripProvider>
            <div className={classes.root}>
            <div className={classes.header}>
            <Typography variant="h1">Welcome Travellers</Typography>
            <Typography className={classes.intro} variant="h3">
                You can find here the best trips from around the world!
                Browse them, rate if you like, amend them for yourself, to fit your needs or plan your dream trip from scratch!
                </Typography>
            <Typography className={classes.recommended} variant="h3">Here are the best ones so far!</Typography>
            </div>
            <RecommendedTrips class={classes.root}/>
            </div>
        </TripProvider>
    )
}
