import React, { useEffect, useState } from "react";
const IconsBox = ({ likedRecipe, recipeID }) => {
    const [isLiked, setIsLiked] = useState(false);
    useEffect(() => {
        setIsLiked(likedRecipe.some((likerecipe) => likerecipe.recipe === recipeID))
    }, [likedRecipe, recipeID])

    return (
        <>
            {/* Top-Right Icons */}
            <button className={`p-2 rounded-full  ${isLiked ? "bg-red-500" : "text-white"} flex items-center justify-center`}>
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
