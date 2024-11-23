import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Home/LandingPage";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import Page from "./components/PostLog/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Welcome" element={<Page />}/>
      </Routes>
    </Router>
  );
}

export default App;
