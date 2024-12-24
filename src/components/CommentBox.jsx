import React from 'react'
import useFetchData from '../customHooks/useFetchData'

const CommentBox = ({ recipeid }) => {
    console.log(recipeid);
    const { data, error, loading } = useFetchData()

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


    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Comments</h2>
                <div className="space-y-6">
                    {/* Comment 2 */}
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User 2"
                            className="rounded-full w-10 h-10"
                        />
                        <div>
                            <p className="font-semibold">User 2</p>
                            <p className="text-gray-600">Can’t wait to try this recipe!</p>
                        </div>
                        <button className="text-white border-2 border-white rounded-full p-2 hover:bg-red-600 transition">
                            <i className="fas fa-heart text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentBox