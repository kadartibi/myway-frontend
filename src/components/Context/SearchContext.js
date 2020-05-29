import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { server } from "./ServerSelector";


export const SearchContext = createContext();

export const SearchProvider = (props) => {

  const [searchType, setSearchType] = useState();
  const [searchString, setSearchString] = useState();
  const [trips, setTrips] = useState([]);
 
   
  
  useEffect(() => {
    axios.get(server + "/trip/search/"+ (String(searchString)) + "&" + (String(searchType)), 
    ).then(res => {
        console.log(res.data)
        setTrips(res.data)
    });
  },[searchString, searchType]);

 


  return (
    <SearchContext.Provider
      value={{searchType,setSearchType, searchString, setSearchString, trips}}
    >
      {props.children}
    </SearchContext.Provider>
  );
}