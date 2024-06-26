import "../styles/header.css"
import "../styles/hamburger.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

        const [search, setSearch] = useState("")

        const handleOnSearch = (event) => {
                setSearch(event.target.value)
        }

        return (
                <header className="header">
                        <div className="container">
                                <h1 className="logo">ASM<span className="logo-span">tutors</span></h1>

                                <div className="search-tag">
                                        <input className="search-bar" typeof="text" value={search} onChange={handleOnSearch}></input>
                                        <button className="search-btn">Q</button>
                                </div>

                                <nav>
                                        <ul>
                                                <Link to="/" >Home</Link>
                                                <Link to="/about">About</Link>
                                                <Link to="/login">Login</Link>
                                        </ul>
                                </nav>
                                <button className="hamburger">
                                        <div className="line1"></div>
                                        <div className="line2"></div>
                                        <div className="line3"></div>
                                </button>
                        </div>
                </header>
        )
}

export default Header;