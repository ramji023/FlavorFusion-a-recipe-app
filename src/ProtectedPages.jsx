import React, { useContext } from "react";
import { AuthContext } from "./hooks/authContext";
import { Navigate } from "react-router-dom";

const ProtectedPages = ()=>{
    const {userData} = useContext(AuthContext)
    if(userData.isAuthenticate===false){
        return <Navigate to="/login" replace/>
    }

    return children
}

export default ProtectedPages