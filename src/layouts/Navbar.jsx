import React from "react";
import Logo from "../components/Logo.jsx";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-lg">
            <div className="flex items-center justify-between max-w-screen-lg mx-auto">
                <Logo />

                {/* Navbar Links - Centered */}
                <div className="flex space-x-6 mx-auto">
                    <Link to="/" className="text-white font-bold hover:text-yellow-400 transition">Home </Link>
                    <Link to="/recipes" className="text-white font-bold hover:text-yellow-400 transition">Recipes</Link>
                    <Link to="/create" className="text-white font-bold hover:text-yellow-400 transition">Create Recipe</Link>
                    <Link to="/favorites" className="text-white font-bold hover:text-yellow-400 transition">Favorites</Link>
                    <Link to="/about" className="text-white font-bold hover:text-yellow-400 transition">About Us</Link>
                </div>

                {/* Login / Signup - Right Aligned */}
                <div className="flex space-x-6">
                    <Link
                        to="/login"
                        className="text-white font-bold bg-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="text-white font-bold bg-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
