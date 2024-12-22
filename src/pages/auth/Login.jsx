import React, { useContext, useEffect, useState } from "react";
import usePostData from "../../customHooks/usePostData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/authContext";
const Login = () => {
    const navigate = useNavigate();
    const { register } = useContext(AuthContext)
    const { data, error, loading, success, postData } = usePostData("/api/v1/users/login")
    const [loggingUserData, setLoggingUserData] = useState({
        email: "",
        password: "",
    })

    function handleInputChange(e) {
        const { name, value } = e.target;
        setLoggingUserData((currUserData) => ({ ...currUserData, [name]: value }))
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        const { email, password } = loggingUserData
        // console.log(loggingUserData)
        postData({ email, password })
    }

    useEffect(() => {
        if (success) {
            // console.log("got response from custome hook : ",data.data.existedUser);
            const newUserData = {
                username: data.data.existedUser.username,
                email: data.data.existedUser.email,
            };
            console.log("user logged in  :", newUserData);
            register(newUserData);
            navigate('/');
        }
    }, [success, navigate]);


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100">
            {/* Login Form */}
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 font-[Poppins]">
                    Log in to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        FlavorFusion
                    </span>
                </h2>
                {loading && <p className="text-yellow-500 text-center text-xs">Submitting your details...</p>}
                {error && <p className="text-red-500 text-center text-xs"> {error || "Something went wrong!"}</p>}
                <form onSubmit={handleSubmitForm}>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={loggingUserData.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* Password Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loggingUserData.password}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Enter your password"
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-pink-500 font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
