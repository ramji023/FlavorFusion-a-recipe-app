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
import { AuthProvider } from "./hooks/authContext";
import ProtectedPages from "./ProtectedPages";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-recipe" element={<AddRecipe />} />

            {/* wrap profile component in ProtectedPages  */}
            <Route path="/profile" element={
              <ProtectedPages>
                <Profile />
              </ProtectedPages>
            } />

            <Route path="/card" element={<Card />} />
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