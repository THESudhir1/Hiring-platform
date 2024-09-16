import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import './tailwind.css';
import Signup from "./pages/Signup";
import NavBar from "./components/common/Navbar";

function App() {
  return (
    <Router> {/* Wrap your application inside Router */}
      <div className="min-h-screen bg-richblack-900 flex flex-col font-inter overflow-y-hidden">
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
