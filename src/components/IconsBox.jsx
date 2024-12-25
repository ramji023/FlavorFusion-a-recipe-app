import React from "react";
const IconsBox = ({ likedRecipe, recipeID }) => {
    const isLiked = likedRecipe.some((likerecipe) => likerecipe.recipe === recipeID)
    return (
        <>
            {/* Top-Right Icons */}
            <div className="flex justify-end space-x-2 text-white">
                <button className={`p-2 rounded-full bg-transparent ${isLiked ? "bg-red-500" : "text-white"} hover:text-white flex items-center justify-center`}>
                    <i className="far fa-heart text-xl"></i>
                </button>
                <button className="p-2 rounded-full bg-transparent hover:bg-gray-200 hover:text-black flex items-center justify-center">
                    <i className="far fa-bookmark text-xl"></i>
                </button>
                <button className="p-2 rounded-full bg-transparent hover:bg-gray-300 hover:text-black flex items-center justify-center">
                    <i className="fas fa-ellipsis-h text-xl"></i>
                </button>
            </div>
        </>
    );
};

export default IconsBox;
