import React, { useState, useEffect, createContext} from 'react';
import Axios from 'axios';

export const TripContext = createContext();

export const TripProvider = props => {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        // Axios.get("http://10.44.1.211:8080/trip/list").then(res => {
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