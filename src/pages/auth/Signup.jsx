import React from 'react';
import Logo from '../../components/Logo';

const Signup = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex justify-center mb-6">
                    <Logo />
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-sm mt-4">
                    Already have an account?
                    <a href="/login" className="text-teal-500 hover:underline">Log In</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
