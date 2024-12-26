import React, { useState } from 'react'
import useFetchData from '../customHooks/useFetchData'
import usePostData from "../customHooks/usePostData"
const CommentBox = ({ recipeid }) => {

    // if user write comment then handle that comment 
    const { data: commentData, error: commentError, loading: commentLoading, postData, success: commentSuccess } = usePostData(`/api/v1/comment/write-comment/${recipeid}`)
    const [content, setContent] = useState("");
    async function handleSubmitComment(e) {
        e.preventDefault();
        console.log("comment : ", content)
        try {
            await postData({ content: content })
            setContent("")
            fetchData()
        } catch (err) {
            console.log("facing error to send comment to server", err)
        }
    }

    // console.log(recipeid);
    const recipeId = recipeid;
    const { data, error, loading, fetchData } = useFetchData(`/api/v1/comment/get-comments/${recipeId}`)
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
                    {/* Add Comment Input */}
                    <form onSubmit={handleSubmitComment} className="flex items-center space-x-4">
                        <input
                            type="text"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write a comment..."
                            className="flex-grow px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white px-6 py-2 rounded-lg shadow-md font-semibold transition"
                        >
                            Comment
                        </button>
                    </form>


                    <div className="space-y-6 mt-4">

                        {allComments.length === 0 && (<p>There is no comments on this recipe</p>)}

                        {allComments.length !== 0 && allComments.map((comment, index) => (
                            <div key={index} className="flex items-center space-x-4 ">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User 2"
                                    className="rounded-full w-10 h-10"
                                />
                                <div>
                                    <p className="font-semibold">{comment.creatorName}</p>
                                    <p className="text-gray-600">{comment.content}</p>
                                </div>
                                {/* <button className="text-white rounded-full p-2 hover:bg-red-600 transition">
                                    <i className="fas fa-heart text-xl"></i>
                                </button> */}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }


}

export default CommentBox