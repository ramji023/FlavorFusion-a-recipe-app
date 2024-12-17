import React from "react";
import { Link } from "react-router-dom";
const Profile = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 min-h-screen p-8">
            <div className="container mx-auto px-6 md:px-12">
                {/* Profile Section */}
                <div className="flex justify-between items-center mb-12">
                    {/* Left: Profile Info */}
                    <div className="flex items-center space-x-6">
                        {/* Profile Image */}
                        <div className="relative">
                            <img
                                src="your-profile-image-url.jpg"
                                alt="User Avatar"
                                className="w-32 h-32 rounded-full object-cover shadow-lg"
                            />
                            {/* Edit Icon */}
                            <button className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow">
                                <i className="fas fa-edit"></i>
                            </button>
                        </div>

                        {/* Profile Details */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
                            <p className="text-lg text-gray-600">johndoe@example.com</p>
                            <div className="flex space-x-4 mt-2">
                                <div>
                                    <p className="text-gray-700 font-semibold">Followers</p>
                                    <p className="text-xl font-bold text-gray-900">1.2K</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 font-semibold">Following</p>
                                    <p className="text-xl font-bold text-gray-900">567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Action Icons */}
                    <div className="flex space-x-6">
                        <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full shadow-md hover:shadow-lg">
                            <i className="fas fa-share-alt text-2xl"></i>
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg">
                            <i className="fas fa-cog text-2xl"></i>
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg">
                            <i className="fas fa-ellipsis-v text-2xl"></i>
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex space-x-8 text-gray-700 font-medium text-lg mb-8">
                    <Link to="/add-recipe" className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600">
                        Created Recipes
                    </Link>
                    <Link to="#" className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600">
                        Saved Recipes
                    </Link>
                </div>

                {/* Divider */}
                <div className="border-b-2 border-gray-300 mb-8"></div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Recipe"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">Recipe Title</h3>
                            <p className="text-gray-600 mt-2">Short recipe description...</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
