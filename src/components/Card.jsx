import profile from "../assets/profile.jpg"
import recipe from "../assets/recipe.jpg"
import React from "react";

const Card = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 max-w-xs w-full mt-4 mb-4 ml-4">
            {/* Image Section */}
            <div className="relative w-full" style={{ aspectRatio: '1' }}> {/* Makes the card square */}
                <img
                    src={recipe}
                    alt="Recipe"
                    className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-110" 
                />
                {/* Creator Info Overlay */}
                <div className="absolute bottom-2 left-2 flex items-center space-x-2 bg-white bg-opacity-80 p-1 rounded-full">
                    <img
                        src={profile}
                        alt="Creator"
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-semibold text-gray-800">John Doe</span>
                </div>
                {/* Action Icons */}
                <div className="absolute top-2 right-2 flex space-x-2">
                    <button className="bg-gray-100 text-gray-600 hover:text-red-500 p-2 rounded-full shadow-sm transition duration-200">
                        <i className="fas fa-heart"></i>
                    </button>
                    <button className="bg-gray-100 text-gray-600 hover:text-yellow-500 p-2 rounded-full shadow-sm transition duration-200">
                        <i className="fas fa-bookmark"></i>
                    </button>
                    <button className="bg-gray-100 text-gray-600 hover:text-gray-700 p-2 rounded-full shadow-sm transition duration-200">
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </div>
                {/* Star Rating */}
                <div className="absolute bottom-2 right-2 flex space-x-1">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star-half-alt text-yellow-400"></i>
                </div>
            </div>

        </div>
    );
};

export default Card;
