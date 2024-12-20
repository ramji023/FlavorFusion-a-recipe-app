import { createContext, useEffect, useState } from "react";
import usePostData from "../customHooks/usePostData.js";
export const AuthContext = createContext();   // create the context first

export const AuthProvider = ({ children }) => {
    const [userData, setuserData] = useState({
        isAuthenticate: false,
        user: {
            username: "",
            email: "",
        }
    });

    const { data, error, loading, success, postData } = usePostData("/api/v1/users/current-user");

    useEffect(() => {
        const fetchUserData = async () => {
            if (typeof postData === "function") {
                await postData({});
            } else {
                console.error("postData is not a function");
            }
        };

        fetchUserData();
    }, [postData]); // Depend on postData to trigger effect


    // Make sure you are handling data once the request has finished
    useEffect(() => {
        if (success && data) {
            console.log("user data is:", data);
            setuserData({
                isAuthenticate: true,
                user: {
                    username: data.data.username,
                    email: data.data.email,
                }, // Assuming the user data is stored in 'data.user'
            });
        }
    }, [success]); // Trigger this effect when success or data changes


    //when user successfully logged in or first time register
    function register(newUserData) {
        // console.log("new user data : ", newUserData);
        setuserData({
            isAuthenticate: true,
            user: newUserData,
        })

        console.log("user logged in successfully");
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

    return (
        <AuthContext.Provider value={{ logout, register, userData, setuserData }}>
            {children}
        </AuthContext.Provider>
    )
}