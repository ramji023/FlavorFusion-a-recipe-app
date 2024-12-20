import { createContext, useState } from "react";

export const AuthContext = createContext();   // create the context first

export const AuthProvider = ({ children }) => {
    const [userData, setuserData] = useState({
        isAuthenticate: false,
        user: {
            username: "",
            email: "",
        }
    });

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