import React, { useState, useEffect, createContext} from 'react';
import Axios from 'axios';
import { server } from "./ServerSelector";

export const TripContext = createContext();

export const TripProvider = props => {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        console.log(server)
        Axios.get(server + "/trip/list").then(res => {
            setTrips(res.data)
        });
        }, [])

    return (
        <TripContext.Provider value={[trips]}> 
            {props.children}
        </TripContext.Provider>
    )
}