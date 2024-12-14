import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo"; // Replace with your logo component or image path
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 py-8">
            {/* Top Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
                {/* Logo and Address */}
                <div className="text-center md:text-left">
                    <Logo />
                    <p className="text-gray-700 mt-4">
                        123 Flavor Street, Culinary City, FC 45678
                    </p>
                </div>

                {/* Features */}
                <div className="flex flex-col space-y-2 text-center md:text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Features</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <Link to="/discover-recipes" className="hover:text-pink-500">
                                Discover Recipes
                            </Link>
                        </li>
                        <li>
                            <Link to="/create-share" className="hover:text-pink-500">
                                Create & Share
                            </Link>
                        </li>
                        <li>
                            <Link to="/communities" className="hover:text-pink-500">
                                Join Communities
                            </Link>
                        </li>
                        <li>
                            <Link to="/creators" className="hover:text-pink-500">
                                Follow Creators
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f text-2xl"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-400"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-500"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-700"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-300"></div>

            {/* Bottom Section */}
            <div className="text-center text-gray-600 text-sm">
                © 2024 FlavorFusion. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
