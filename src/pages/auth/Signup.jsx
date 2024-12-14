import React from "react";

const Signup = () => {
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
                <form>
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            placeholder="Enter your username"
                        />
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            placeholder="Enter your email"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Enter your password"
                        />
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
                    <a
                        href="/login"
                        className="text-pink-500 font-semibold hover:underline"
                    >
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
