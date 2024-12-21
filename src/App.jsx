import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Footer from "./layouts/Footer";
import Profile from "./pages/Profile";
import Card from "./components/Card";
import AddRecipe from "./pages/AddRecipe";
import Recipes from "./pages/Recipes";
import { AuthProvider } from "./hooks/authContext";
import ProtectedPages from "./ProtectedPages";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* wrap protected component in ProtectedPages  */}
            <Route element={<ProtectedPages />}>
              <Route path="/" element={<Home />} />
              <Route path="/add-recipe" element={<AddRecipe />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            {/* here is our public components  */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App;