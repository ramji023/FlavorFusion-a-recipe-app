import React, { useEffect, useState } from "react";
import useFetchData from "../customHooks/useFetchData";
import { Outlet, useNavigate, Link } from "react-router-dom";
import IconsBox from "../components/IconsBox";
const Recipes = () => {
    const naviagate = useNavigate()
    const [likedRecipe, setLikedRecipe] = useState([])
    const { data, error, loading } = useFetchData("/api/v1/recipes/get-recipe");
    const { data: likedData, error: likedError, loading: likedLoading } = useFetchData("/api/v1/likes/liked-recipe")
    // const { data: saveData, error: saveError, loading: saveLoading } = useFetchData("")
    useEffect(() => {
        if (likedData.success) {
            setLikedRecipe(likedData.data)
        }
    }, [likedData])
    // Return if loading
    if (loading || likedLoading) {
        return (
            <div className="flex justify-center items-center mt-8">
                <p className="text-lg font-semibold text-gray-700 animate-pulse bg-white px-4 py-2 rounded-full shadow-md">
                    Fetching recipes for you...
                </p>
            </div>
        );
    }
    // Return if error exists
    if (error || likedError) {
        return (
            <div className="flex flex-col justify-center items-center mt-8">
                <p className="text-lg font-semibold text-red-700 bg-red-100 px-4 py-2 rounded-full shadow-md">
                    {error}
                </p>
            </div>
        );
    }

    // return if data fetch successfully
    if (data.success) {
        return (
            <>
                <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 min-h-screen p-8">
                    <div className="container mx-auto">
                        {/* Page Heading */}
                        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
                            Discover Recipes
                        </h2>

                        {/* Recipe Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {data.data.map((recipe) => (
                                <div
                                    onClick={() => naviagate(`/recipes/${recipe._id}`)}
                                    key={recipe._id}
                                    className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-105 transition duration-300"
                                >
                                    {/* Recipe Image */}
                                    <div className="relative group">
                                        <img
                                            src={recipe.images}
                                            alt={recipe.recipeTitle}
                                            className="w-full h-56 object-cover rounded-2xl"
                                        />

                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 opacity-100  transition duration-300 rounded-2xl">
                                            {/* Top-Right Icons */}
                                            <div className="flex justify-end space-x-2 text-white text-2xl">
                                                <IconsBox likedRecipe={likedRecipe} recipeID={recipe._id} />
                                            </div>

                                            {/* Title and Creator Info */}
                                            <div className="flex items-center">
                                                <img
                                                    src={recipe.userInfo.avatar}
                                                    alt={recipe.userInfo.username}
                                                    className="w-10 h-10 rounded-full border-2 border-white"
                                                />
                                                <div className="ml-3">
                                                    <p className="text-white text-sm font-semibold">{recipe.userInfo.username}</p>
                                                    <h3 className="text-white text-lg font-bold">{recipe.recipeTitle}</h3>
                                                </div>
                                            </div>

                                            {/* Save Icon (Bottom-Right) */}
                                            {/* <button className="absolute bottom-4 right-4 p-2 rounded-full border border-white text-white">
                                                <i className="far fa-bookmark"></i>
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }

};

export default Recipes;
