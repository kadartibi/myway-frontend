import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { server } from "./ServerSelector";


export const AdminContext = createContext();

export const AdminProvider = (props) => {

  const [allUsers, setAllUsers] = useState([]);
  
  useEffect(() => {
    Axios.get(server + "/user/allusers", {
      withCredentials: true
    }).then(res => {
      setAllUsers(res.data)
      
    })}, [allUsers]);

  function deleteUser(userName){
    Axios.delete(server + "/user/delete/"+userName, {
      withCredentials: true
    }).then(res => {
      console.log("user deleted:" + userName )
      
    })}
  

  return (
    <AdminContext.Provider
      value={{ allUsers, deleteUser }}
    >
      {props.children}
    </AdminContext.Provider>
  );
}