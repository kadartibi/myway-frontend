import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";

export const UserContext = createContext();

export const UserProvider = props => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    Axios.get(server + "/auth/user", {
      withCredentials: true
    }).then(res => {
      console.log(res.data);
      setUsername(res.username);
      setFirstName(res.firstName);
      setLastName(res.lastName);
      setEmail(res.email);
    }, []);
  });

  return (
    <UserContext.Provider
      value={{
        username,
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
