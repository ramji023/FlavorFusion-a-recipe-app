import React, { useEffect, useState } from "react";
import emailValidation from "../../utils/emailValidation";
import passwordChecker from "../../utils/passwordChecker";
import { isValidUsername } from "../../utils/validateUsername";
import usePostData from "../../customHooks/usePostData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate(); // initialize useNavigate
    const { data, error, loading, success, postData } = usePostData("/api/v1/users/register")
    const [registerformData, setRegisterFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    function handleInputChange(e) {
        const { name, value } = e.target
        setRegisterFormData((currFormData) => ({ ...currFormData, [name]: value }))
    }
    function handleSubmitForm(e) {
        e.preventDefault()
        // console.log(registerformData);
        const { username, email, password } = registerformData
        if (emailValidation(email) && passwordChecker(password) && isValidUsername(username)) {
            postData({ username, email, password });
        }
    }

    // if data fetch successfully then navigate to the home page
    useEffect(() => {
        if (success) {
            console.log("response data : ", data)
            navigate("/")
        }
    }, [success, navigate])


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100">
            {/* Sign Up Form */}
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 font-[Poppins]">
                    Sign Up to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        FlavorFusion
                    </span>
                </h2>
                {loading && <p className="text-yellow-500 text-center text-xs">Submitting your details...</p>}
                {error && <p className="text-red-500 text-center text-xs"> {error || "Something went wrong!"}</p>}
                <form onSubmit={handleSubmitForm}>
                    {/* Username Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            placeholder="Enter your username"
                            value={registerformData.username}
                            onChange={handleInputChange}
                        />
                        {
                            !isValidUsername(registerformData.username) && (
                                <p className="text-red-500 mt-1 text-xs">**username contain only alphabets</p>
                            )
                        }
                    </div>
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            placeholder="Enter your email"
                            value={registerformData.email}
                            onChange={handleInputChange}
                        />
                        {
                            !emailValidation(registerformData.email) && (
                                <p className="text-red-500 mt-1 text-xs">**Please enter valid email</p>
                            )
                        }

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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Enter your password"
                            value={registerformData.password}
                            onChange={handleInputChange}
                        />
                        {
                            !passwordChecker(registerformData.password) && (
                                <p className="text-red-500 mt-1 text-xs">**password must contain Minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character</p>
                            )
                        }
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                        >
                            Sign Up
                        </button>


                    </div>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-pink-500 font-semibold hover:underline"
                    >
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
