import React, { useEffect, useState } from "react";
import axiosInstance from "../axios.interceptor";


const IconsBox = ({ likedRecipe, recipeID, savedRecipe }) => {
    const [isLiked, setIsLiked] = useState(false);  // user liked or disliked the recipe
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        setIsLiked(likedRecipe.some((likerecipe) => likerecipe.recipe === recipeID));
    }, [likedRecipe, recipeID]);
    useEffect(() => {
        setIsSaved(savedRecipe.some((saveRecipe) => saveRecipe.recipeId === recipeID))
    }, [savedRecipe, recipeID])
    // Calculate completeUrl within the toggleLikeButton function
    const toggleLikeButton = async () => {
        const newAction = !isLiked ? "like" : "dislike";
        const prevStatus = isLiked;

        setIsLiked(!prevStatus);

        // Calculate completeUrl here
        const completeUrl = `/api/v1/likes/like-recipe/${recipeID}?action=${newAction}`;

        try {
            // console.log(newAction)
            // console.log(completeUrl)
            const response = await axiosInstance.post(completeUrl, {})
            if (response && response.data) {
                console.log(response.data)
            }
        } catch (err) {
            setIsLiked(prevStatus)
            console.log("error to send like status to server : ", err)
        }
    };

    async function toggleSavedButton() {
        const newAction = isSaved ? "false" : "true"
        const prevStatus = isSaved
        setIsSaved(!prevStatus)
        const completeUrl = `/api/v1/fav-recipe/save-recipe/${recipeID}?save=${newAction}`

        try {
            console.log(newAction)
            console.log(completeUrl)
            const response = await axiosInstance.post(completeUrl, {})
            if (response && response.data) {
                console.log(response.data)
            }
        } catch (err) {
            setIsSaved(prevStatus)
            console.log("error to send save status to server : ", err)
        }
    }
    return (
        <>
            {/* Top-Right Icons */}
            <button onClick={toggleLikeButton} className={`p-2 rounded-full  ${isLiked ? "bg-gradient-to-r from-orange-400 via-pink-400 to-red-400" : "text-red-500"} flex items-center justify-center`}>
                <i className="far fa-heart "></i>
            </button>
            <button onClick={toggleSavedButton} className={`p-2 rounded-full ${isSaved ? "bg-purple-500" : "text-purple-500"} flex items-center justify-center`}>
                <i className="far fa-bookmark "></i>
            </button>
            <button className="p-2 rounded-full bg-transparent hover:bg-gray-300 hover:text-black flex items-center justify-center">
                <i className="fas fa-ellipsis-h "></i>
            </button>

        </>
    );
};

export default IconsBox;
