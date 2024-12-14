import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollRef = useRef(null);

  const scrollDown = () => {
    // Scroll to the next section smoothly
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen overflow-hidden">
      {/* Hero Section with 3D effect */}
      <div className="flex items-center justify-center text-center h-screen px-4 py-20 md:px-8">
        <div className="relative z-10 text-white">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Welcome to <span className="text-pink-500">FlavorFusion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover exciting new recipes and flavors. Get inspired and start
            cooking today!
          </p>

          <button
            onClick={scrollDown}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
          >
            Explore Recipes
          </button>
        </div>
        {/* 3D Background Image */}
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?food')" }} />
      </div>

      {/* Section 2 with Recipe Cards */}
      <div
        ref={scrollRef}
        className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20 space-y-8"
      >
        <h2 className="text-4xl font-bold text-pink-500 mb-6">Explore Our Recipes</h2>
        <p className="text-lg mb-4 text-center max-w-xl mx-auto">
          Delicious recipes curated just for you. Try new dishes and share them
          with your loved ones.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Recipe Card 1 */}
          <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="https://source.unsplash.com/300x300/?recipe"
              alt="Recipe 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Delicious Pasta</h3>
              <p className="text-sm text-gray-600 mt-2">
                A savory and creamy pasta dish that will leave you craving more.
              </p>
              <Link
                to="/recipes"
                className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full hover:bg-gradient-to-l hover:scale-105 transition-all"
              >
                See Recipe
              </Link>
            </div>
          </div>

          {/* Recipe Card 2 */}
          <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="https://source.unsplash.com/300x300/?dessert"
              alt="Recipe 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Chocolate Cake</h3>
              <p className="text-sm text-gray-600 mt-2">
                A rich, moist chocolate cake perfect for any occasion.
              </p>
              <Link
                to="/recipes"
                className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full hover:bg-gradient-to-l hover:scale-105 transition-all"
              >
                See Recipe
              </Link>
            </div>
          </div>

          {/* Recipe Card 3 */}
          <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="https://source.unsplash.com/300x300/?salad"
              alt="Recipe 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Healthy Salad</h3>
              <p className="text-sm text-gray-600 mt-2">
                A fresh, vibrant salad loaded with nutrients and flavor.
              </p>
              <Link
                to="/recipes"
                className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full hover:bg-gradient-to-l hover:scale-105 transition-all"
              >
                See Recipe
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2024 FlavorFusion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
