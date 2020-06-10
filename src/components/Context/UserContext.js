import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";

export const UserContext = createContext();

export const UserProvider = props => {
  const [userName, setUsername] = useState("");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();


  useEffect(() => {
    Axios.get(server + "/current-user-object", {
      withCredentials: true
    }).then(res => {
      setUsername(res.data.userName);
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setEmail(res.data.email);
    }, []);
  });
  return (
    <UserContext.Provider
      value={{
        userName,
        setUsername,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail
      }}
    >
      {props.children}
    </UserContext.Provider>
    //add it to app js to work
  );
};
