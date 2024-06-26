import { Routes, Route } from "react-router-dom"

import Home from "./layouts/Home.js"
import About from "./layouts/About.js"
import NotFound from "./layouts/404.js"
import Login from "./layouts/Login.js"
import Register from "./layouts/Register.js"

import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import "./styles/App.css"

const App = () => {
        return (
                <div className="App">
                        <Header />
                                <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/*" element={<NotFound />} />
                                </Routes>
                        <Footer />
                </div>
        )
}

export default App