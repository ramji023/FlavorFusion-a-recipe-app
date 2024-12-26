import React, { useEffect, useState } from "react";
import axiosInstance from "../axios.interceptor";


const IconsBox = ({ likedRecipe, recipeID }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [action, setAction] = useState(null);

    useEffect(() => {
        setIsLiked(likedRecipe.some((likerecipe) => likerecipe.recipe === recipeID));
    }, [likedRecipe, recipeID]);

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

    return (
        <>
            {/* Top-Right Icons */}
            <button onClick={toggleLikeButton} className={`p-2 rounded-full  ${isLiked ? "bg-red-500" : "text-white"} flex items-center justify-center`}>
                <i className="far fa-heart "></i>
            </button>
            <button className="p-2 rounded-full bg-transparent hover:bg-gray-200 hover:text-black flex items-center justify-center">
                <i className="far fa-bookmark "></i>
            </button>
            <button className="p-2 rounded-full bg-transparent hover:bg-gray-300 hover:text-black flex items-center justify-center">
                <i className="fas fa-ellipsis-h "></i>
            </button>

        </>
    );
};

export default IconsBox;
