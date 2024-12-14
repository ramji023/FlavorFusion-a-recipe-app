import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark, faUser, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('your-image-url.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            Discover Your Favorite Recipes with <span className="text-pink-500">FlavorFusion</span>
          </h1>
        </div>
      </section>

      {/* Recipe Categories Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Recipe Categories</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Category Cards */}
          {["Category 1", "Category 2", "Category 3", "Category 4"].map((category, index) => (
            <div key={index} className="relative group">
              <img
                src="category-image-url.jpg"
                alt={category}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                {category}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Communities Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Discover Communities</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Community Cards */}
          {["Community 1", "Community 2", "Community 3", "Community 4"].map((community, index) => (
            <div key={index} className="relative group">
              <img
                src="community-image-url.jpg"
                alt={community}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                {community}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Creators Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Creators</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Creator Cards */}
          {["Creator 1", "Creator 2", "Creator 3", "Creator 4"].map((creator, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-lg">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                <img src="creator-profile-image-url.jpg" alt={creator} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{creator}</h3>
              <button className="mt-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
                Follow
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Recipes Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Discover Recipes</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Recipe Cards */}
          {["Recipe 1", "Recipe 2", "Recipe 3", "Recipe 4"].map((recipe, index) => (
            <div key={index} className="relative group bg-white shadow-lg rounded-lg">
              <img
                src="recipe-image-url.jpg"
                alt={recipe}
                className="w-full h-[250px] object-cover rounded-t-lg"
              />
              <div className="absolute top-2 right-2 text-white text-lg flex space-x-2">
                <button className="bg-black p-1 rounded-full">
                  <FontAwesomeIcon icon={faHeart} /> {/* Like Icon */}
                </button>
                <button className="bg-black p-1 rounded-full">
                  <FontAwesomeIcon icon={faBookmark} /> {/* Save Icon */}
                </button>
                <button className="bg-black p-1 rounded-full">
                  <FontAwesomeIcon icon={faUser} /> {/* Creator Icon */}
                </button>
                <button className="bg-black p-1 rounded-full">
                  <FontAwesomeIcon icon={faEllipsisV} /> {/* More Icon */}
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl">{recipe}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
