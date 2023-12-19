import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Routs/Home";
import About from "./Routs/About";
import Service from "./Routs/Service";
import Contact from "./Routs/Contact";
import Login from "./Routs/Login/Login";
class Tours extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path="/about" element={<About />} />
                    </Routes>
                    <Routes>
                        <Route path="/service" element={<Service />} />
                    </Routes>
                    <Routes>
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
export default Tours;