import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../customHooks/useFetchData';
const RecipeData = () => {
    const { id } = useParams();
    console.log("id is : ", id)
    const { data, error, loading } = useFetchData(`/api/v1/recipes/get-recipe/${id}`)

    // Return if loading
    if (loading) {
        return (
            <div className="flex justify-center items-center mt-8">
                <p className="text-lg font-semibold text-gray-700 animate-pulse bg-white px-4 py-2 rounded-full shadow-md">
                    Fetching recipes for you...
                </p>
            </div>
        );
    }
    // Return if error exists
    if (error) {
        return (
            <div className="flex flex-col justify-center items-center mt-8">
                <p className="text-lg font-semibold text-red-700 bg-red-100 px-4 py-2 rounded-full shadow-md">
                    {error}
                </p>
            </div>
        );
    }

    if(data.success){
        console.log(data);
    }


    // if data.success is true
    return (
        <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 min-h-screen p-8">
            <div className="container mx-auto max-w-6xl bg-transparent p-6">
                {/* Upper Section: Title, Creator, Description, Icons, and Counting */}
                <div className="flex justify-between mb-8">
                    {/* Left: Title, Creator, and Description */}
                    <div className="w-4/5">
                        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
                            Delicious Chocolate Cake
                        </h1>
                        <p className="text-lg text-gray-600 mt-2">Created by <strong>Chef John Doe</strong></p>
                        <p className="text-xl text-gray-700 mb-8 italic">
                            A rich and moist chocolate cake that everyone will love!
                        </p>
                    </div>

                    {/* Right: Icons with Counting */}
                    <div className="w-1/5 flex flex-col justify-between items-center space-y-4">
                        {/* Icons with White Outline */}
                        <div className="flex justify-center space-x-4 mb-6">
                            <button className="text-white border-2 border-white rounded-full p-2 hover:bg-red-600 transition">
                                <i className="fas fa-heart text-xl"></i>
                            </button>
                            <button className="text-white border-2 border-white rounded-full p-2 hover:bg-blue-600 transition">
                                <i className="fas fa-comment text-xl"></i>
                            </button>
                            <button className="text-white border-2 border-white rounded-full p-2 hover:bg-green-600 transition">
                                <i className="fas fa-share-alt text-xl"></i>
                            </button>
                        </div>

                        {/* Like, Comment, Share Counters */}
                        {/* Like, Comment, Share Counters */}
                        <div className="flex justify-between items-center space-x-6 mb-8">
                            <div className="text-gray-700">
                                <span className="font-bold">1.2K</span> Likes
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
                        {/* Recipe Images */}
                        <div className="mb-8">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Chocolate Cake"
                                className="w-full h-96 object-cover rounded-lg shadow-md mb-4"
                            />
                        </div>

                        {/* Recipe Video */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Watch the Recipe</h2>
                            <video controls className="w-full h-96 object-cover rounded-lg shadow-md">
                                <source src="your-video-url.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Steps */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Steps to Make</h2>

                            <ol className="list-decimal pl-6 space-y-3 text-lg text-red-600">
                                <li>Preheat the oven to 350°F (175°C). Grease your cake pan with butter or non-stick spray, then lightly dust it with flour to ensure the cake doesn’t stick after baking.</li>
                                <li>In a large bowl, sift the all-purpose flour, cocoa powder, baking powder, and salt. This will ensure all the dry ingredients are evenly distributed and remove any lumps from the cocoa powder.</li>
                                <li>In another bowl, whisk the eggs with sugar until smooth and fluffy. Add in the milk, vegetable oil, and vanilla extract. Mix these wet ingredients well to form a creamy batter base.</li>
                                <li>Gradually combine the wet mixture with the dry ingredients. Stir continuously with a spatula or mixer on low speed to avoid overmixing, which can affect the texture of the cake. The batter should be thick but smooth.</li>
                                <li>Pour the batter into the prepared cake pan and spread it out evenly. Bake the cake for 45 minutes, checking for doneness by inserting a toothpick into the center. If it comes out clean, the cake is ready.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Right Section: Ingredients (20%) */}
                    <div className="w-1/5 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>1 cup all-purpose flour</li>
                            <li>1/2 cup cocoa powder</li>
                            <li>1 cup sugar</li>
                            <li>2 large eggs</li>
                            <li>1/2 cup milk</li>
                            <li>1/2 cup vegetable oil</li>
                            <li>1 tsp vanilla extract</li>
                            <li>1 tsp baking powder</li>
                            <li>1/2 tsp salt</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-t-2 border-gray-300 my-6" />

                {/* Comments Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Comments</h2>
                    <div className="space-y-6">
                        {/* Comment 1 */}
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User 1"
                                className="rounded-full w-10 h-10"
                            />
                            <div>
                                <p className="font-semibold">User 1</p>
                                <p className="text-gray-600">This cake looks amazing!</p>
                            </div>
                            <button className="text-white border-2 border-white rounded-full p-2 hover:bg-red-600 transition">
                                <i className="fas fa-heart text-xl"></i>
                            </button>
                        </div>

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
            </div>
        </div>

    )
}

export default RecipeData