import React from "react";
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <Link to="/"><h3>Keeper App</h3></Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">Todo</Link>
            </div>
        </header>
    );
}

export default Header;
