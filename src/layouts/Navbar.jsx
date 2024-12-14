// Navbar.jsx
import React from "react";
import Logo from "../components/Logo.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 p-4 shadow-2xl sticky top-0 z-50">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                {/* Logo */}
                <Logo />

                {/* Navbar Links - Centered */}
                <div className="flex space-x-8 mx-auto">
                    <Link
                        to="/"
                        className="text-white text-lg font-semibold font-[Poppins] hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/recipes"
                        className="text-white text-lg font-semibold font-[Poppins] hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
                    >
                        Recipes
                    </Link>
                    <Link
                        to="/create"
                        className="text-white text-lg font-semibold font-[Poppins] hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
                    >
                        Create Recipe
                    </Link>
                    <Link
                        to="/favorites"
                        className="text-white text-lg font-semibold font-[Poppins] hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
                    >
                        Favorites
                    </Link>
                    <Link
                        to="/about"
                        className="text-white text-lg font-semibold font-[Poppins] hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
                    >
                        About Us
                    </Link>
                </div>

                {/* Login / Signup - Right Aligned */}
                <div className="flex space-x-4">
                    <Link
                        to="/login"
                        className="text-white font-semibold font-[Poppins] bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="text-white font-semibold font-[Poppins] bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
