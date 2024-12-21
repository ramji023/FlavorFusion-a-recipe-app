import React, { useContext } from "react";
import { AuthContext } from "./hooks/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedPages = ({ children }) => {
    const { userData, isloading } = useContext(AuthContext)
    // console.log("userData : ", userData)
    // console.log("is loading : ", isloading)
    if (isloading) {
        return <p>loading....., Please wait for a minute</p>
    }
    if (!userData.isAuthenticate) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ProtectedPages