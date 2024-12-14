// Logo.jsx
import React from "react";
import "animate.css";

const Logo = () => {
    return (
        <div className="flex items-center space-x-2 cursor-pointer">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 font-[Poppins] transform transition-all duration-500 hover:scale-110 hover:rotate-2">
                Flavor
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 transform transition-all duration-500 hover:scale-110 hover:-rotate-2">
                    Fusion
                </span>
            </h1>
        </div>
    );
};

export default Logo;
