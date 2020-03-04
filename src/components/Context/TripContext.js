import React, { useState, useEffect, createContext} from 'react';
import Axios from 'axios';

export const TripContext = createContext();

export const TripProvider = props => {
    // const trips = [{
    //     "name": "Spanish dream",
    //     "country": "Spain",
    //     "dateOfDeparture": "10/02/2020",
    //     "dateOfReturn" : "15/02/2020",
    //     "totalCost" : 200,
    //     "rating": 3
    // },
    // {
    //     "name": "Spanish dream2",
    //     "country": "Spain",
    //     "dateOfDeparture": "10/02/2020",
    //     "dateOfReturn" : "25/02/2020",
    //     "totalCost" : 500,
    //     "rating": 6
    // }];

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/trip/list").then(res => {
            setTrips(res.data)
            console.log(res.data)
        });
        }, [])

    return (
        <TripContext.Provider value={[trips]}> 
            {props.children}
        </TripContext.Provider>
    )
}