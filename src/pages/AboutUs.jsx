import React from "react";

const AboutPage = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to FlavorFusion</h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    At <span className="font-semibold text-orange-600">FlavorFusion</span>, we bring the world of recipes closer to you. Our mission is to create a community where food lovers and culinary artists can explore, share, and celebrate their passion for food. Whether you're looking to try something new or share your signature dish, FlavorFusion is your go-to platform.
                </p>

                <div className="my-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To inspire culinary creativity and connect people through the joy of cooking. We believe that food has the power to bring people together, and our platform is designed to celebrate this connection.
                    </p>
                </div>

                <div className="my-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-3xl">
                        <li>Explore diverse recipes from around the globe.</li>
                        <li>Connect with fellow food enthusiasts and creators.</li>
                        <li>Save your favorite recipes for easy access anytime.</li>
                        <li>Share your culinary creations with the world.</li>
                    </ul>
                </div>

                <div className="my-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-6">
                        Have questions, suggestions, or feedback? We’d love to hear from you! Use the contact form below to reach out to us.
                    </p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Get in Touch</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            placeholder="Write your message here..."
                            rows="4"
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-500"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutPage;
