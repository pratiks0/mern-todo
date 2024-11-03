import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About.jsx";
import Signup from "./components/signup/Signup.jsx";
import SignIn from "./components/signup/SignIn.jsx";
import Todo from "./components/todo/Todo.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
