import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../customHooks/useFetchData";
import usePostData from "../customHooks/usePostData"

const Profile = () => {
    const { data, error, loading, fetchData } = useFetchData("/api/v1/users/account-details")
    const { error: avatarError, data: avatarData, success: avatarSuccess, loading: avatarLoading, postData } = usePostData("/api/v1/users/upload-avatar")
    // console.log(avatarData, avatarError, avatarSuccess, avatarLoading)
    const fileInputRef = useRef(null);
    // const [avatarUrl, setAvatarUrl] = useState("");
    function handleUploadAvatar(file) {
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                return;
            }
            const formData = new FormData();
            formData.append("avatar", file)
            postData(formData);
        } else {
            return
        }
    }

    useEffect(() => {
        if (avatarSuccess) {
            console.log("response got from server while uploading avatar :  ", avatarData)
            fetchData()
            if (fileInputRef.current) {
                fileInputRef.current.value = ""
            }
        }
    }, [avatarSuccess, avatarData])

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-8">
                <p className="text-lg font-semibold text-gray-700 animate-pulse bg-white px-4 py-2 rounded-full shadow-md">
                    Fetching recipes for you...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center mt-8">
                <p className="text-lg font-semibold text-red-700 bg-red-100 px-4 py-2 rounded-full shadow-md">
                    {error}
                </p>
            </div>
        );
    }

    if (data.success) {
        const accountDetails = data.data
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
                                    src={accountDetails.avatar}
                                    alt="User Avatar"
                                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                                />
                                {/* upload avatar */}
                                <div className="relative">
                                    <label
                                        htmlFor="upload-image"
                                        className="absolute bottom-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white p-2 rounded-full shadow cursor-pointer"
                                    >
                                        <i className="fas fa-edit"></i>
                                    </label>
                                    <input
                                        id="upload-image"
                                        type="file"
                                        name="avatar"
                                        ref={fileInputRef}
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleUploadAvatar(e.target.files[0])} // Handle file selection
                                    />
                                    {avatarLoading && <p className="text-red-500">Uploading...</p>}
                                    {avatarError && <p className="text-red-500">Failed to upload avatar.</p>}
                                </div>

                            </div>

                            {/* Profile Details */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800">{accountDetails.username}</h2>
                                <p className="text-lg text-gray-600">{accountDetails.email}</p>
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
                        <Link to="#" className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600">
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
    }

};

export default Profile;
