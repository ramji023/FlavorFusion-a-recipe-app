import React from 'react'
import useFetchData from '../customHooks/useFetchData'

const CommentBox = ({ recipeid }) => {
    // console.log(recipeid);
    const recipeId = recipeid;
    const { data, error, loading } = useFetchData(`/api/v1/comment/get-comments/${recipeId}`)

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center mt-8">
                <p className="text-lg font-semibold text-red-700 bg-red-100 px-4 py-2 rounded-full shadow-md">
                    {error}
                </p>
            </div>
        );
    }

    // if data.success then render this part
    if (data.success) {
        console.log("get comments by recipe id : ", data);
        const allComments = data.data
        // console.log(allComments);
        return (
            <>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Comments</h2>
                    <div className="space-y-6">

                        {allComments.length === 0 && (<p>There is no comments on this recipe</p>)}

                        {allComments.length !== 0 && allComments.map((comment, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User 2"
                                    className="rounded-full w-10 h-10"
                                />
                                <div>
                                    <p className="font-semibold">{comment.creatorName}</p>
                                    <p className="text-gray-600">{comment.content}</p>
                                </div>
                                <button className="text-white border-2 border-white rounded-full p-2 hover:bg-red-600 transition">
                                    <i className="fas fa-heart text-xl"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }


}

export default CommentBox