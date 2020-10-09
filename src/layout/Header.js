import React from 'react';
import {Link} from "react-router-dom"


function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: 'rgb(255, 192, 203)',
    textAlign: 'center',
    padding: '10px',
    paddingTop: "20px"
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }
  

export default Header;