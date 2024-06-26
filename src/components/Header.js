import "../styles/header.css"
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

                                <div>
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
                        </div>
                </header>
        )
}

export default Header;