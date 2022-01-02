import React from 'react'
import { Link } from 'gatsby'
// import { graphql, useStaticQuery } from 'gatsby'
import '../styles/global.css'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" activeStyle={{ color: "rgb(38, 148, 171)" }} activeClassName="active" to="/shop">Shop</Link>
                <Link className="navLink" activeStyle={{ color: "rgb(38, 148, 171)" }} activeClassName="active" to="/contact">Contact</Link>
                <Link className="navLink" activeStyle={{ color: "rgb(38, 148, 171)" }} activeClassName="active" to="https://www.instagram.com/maisiepaigecross/?hl=en">Social</Link>
            </nav>
        </div>
    )
}
