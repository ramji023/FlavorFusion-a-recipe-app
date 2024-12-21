import { createContext, useEffect, useState } from "react";
import axios from "axios";
import usePostData from "../customHooks/usePostData";

export const AuthContext = createContext();   // create the context first

export const AuthProvider = ({ children }) => {
    const [isloading, setIsloading] = useState(true);
    const [userData, setuserData] = useState({
        isAuthenticate: false,
        user: {
            username: "",
            email: "",
        }
    });

    const { error, loading, data, success, postData } = usePostData("/api/v1/users/current-user");
    useEffect(() => {
        const fetchUserData = async () => {
            setIsloading(true);
            await postData({});
        };

        fetchUserData();
    }, [postData]);

    useEffect(() => {
        if (success && data) {
            const newUserData = {
                isAuthenticate: true,
                user: {
                    username: data.data.username,
                    email: data.data.email,
                },
            };
            setuserData(newUserData);
            setIsloading(false);
        } else if (error) {
            console.error("Error fetching user data:", error);
            setuserData({
                isAuthenticate: false,
                user: { username: "", email: "" },
            });
            setIsloading(false);
        } 
    }, [success, data, error, loading]);



    //when user successfully logged in or first time register
    function register(newUserData) {
        // console.log("new user data : ", newUserData);
        setuserData({
            isAuthenticate: true,
            user: newUserData,
        })


    }

    //when user successfully logout
    function logout() {
        setuserData({
            isAuthenticate: false,
            user: {
                username: "",
                email: "",
            }
        })
    }
    // useEffect(() => {
    //     console.log("Auth state updated:", userData, isloading);
    // }, [userData, isloading]);

    return (
        <AuthContext.Provider value={{ logout, register, userData, setuserData, isloading }}>
            {children}
        </AuthContext.Provider>
    )
}