import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../customHooks/useFetchData';
import CommentBox from '../components/CommentBox';
import IconsBox from '../components/IconsBox';
const RecipeData = () => {
    const { id } = useParams();
    console.log("id is : ", id)
    const { data, error, loading } = useFetchData(`/api/v1/recipes/get-recipe/${id}`)
    const [likedRecipe, setLikedRecipe] = useState([])
    const { data: likedData, error: likedError, loading: likedLoading } = useFetchData("/api/v1/likes/liked-recipe")


    useEffect(() => {
        if (likedData.success) {
            setLikedRecipe(likedData.data)
        }
    }, [likedData])
    console.log(likedRecipe);
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

    if (data.success) {
        console.log("fetch recipe data with like comments and user : ", data);
        const recipeData = data.data
        // if data.success is true
        return (
            <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 min-h-screen p-8">
                <div className="container mx-auto max-w-6xl bg-transparent p-6">
                    {/* Upper Section: Title, Creator, Description, Icons, and Counting */}
                    <div className="flex justify-between mb-8">
                        {/* Left: Title, Creator, and Description */}
                        <div className="w-4/5">
                            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
                                {recipeData.recipeTitle}
                            </h1>
                            <p className="text-lg text-gray-600 mt-2">Created by <strong>{recipeData.creatorName}</strong></p>
                            <p className="text-xl text-gray-700 mb-8 italic">
                                {recipeData.description}
                            </p>
                            <p className="text-lg text-gray-600 mt-2">
                                <span className="mr-4">
                                    Preparation Time: <strong>{recipeData.prepTime}</strong>
                                </span>
                                <span>
                                    Cooking Time: <strong>{recipeData.cookTime}</strong>
                                </span>
                            </p>
                        </div>

                        {/* Right: Icons with Counting */}
                        <div className="w-1/5 flex flex-col justify-between items-center space-y-4">
                            {/* Icons with White Outline */}
                            <div className="flex justify-center space-x-4 mb-6 text-3xl">
                                <IconsBox likedRecipe={likedRecipe} recipeID={recipeData._id} />
                            </div>

                            {/* Like, Comment, Share Counters */}
                            {/* Like, Comment, Share Counters */}
                            <div className="flex justify-between items-center space-x-6 mb-8">
                                <div className="text-gray-700">
                                    <span className="font-bold">{recipeData.likesCount}</span> Likes
                                </div>
                                <div className="text-gray-700">
                                    <span className="font-bold">300</span> Comments
                                </div>
                                <div className="text-gray-700">
                                    <span className="font-bold">50</span> Shares
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-t-2 border-gray-300 my-6" />

                    {/* 80-20 Section Split: Left Side - Images, Video, Steps / Right Side - Ingredients */}
                    <div className="flex mb-8">
                        {/* Left Section: Images, Video, Steps (80%) */}
                        <div className="w-4/5 pr-6">
                            {recipeData.images.map((image, index) => (
                                <div key={index} className="mb-8">
                                    <img
                                        src={image}
                                        alt={recipeData.recipeTitle}
                                        className="w-full h-96 object-cover rounded-lg shadow-md mb-4"
                                    />
                                </div>
                            ))}
                            {/* Recipe Video */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Watch the Recipe</h2>
                                <video controls className="w-full h-96 object-cover rounded-lg shadow-md">
                                    <source src={recipeData.recipeVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Steps */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Steps to Make</h2>

                                <ol className="list-decimal pl-6 space-y-3 text-lg text-red-600">
                                    {recipeData.instructions.map((step) => (
                                        <div key={step.stepNumber}>
                                            <strong className='mr-2'>{`Step : ${step.stepNumber}`}</strong>{step.text}
                                        </div>
                                    ))}
                                </ol>

                            </div>
                        </div>

                        {/* Right Section: Ingredients (20%) */}
                        <div className="w-1/5 bg-white p-6 rounded-lg shadow-md self-start">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {recipeData.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-t-2 border-gray-300 my-6" />
                    <CommentBox recipeid={id} />

                </div>
            </div>

        )
    }
}

export default RecipeData