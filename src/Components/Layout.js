import React from 'react'
import Navbar from '../Components/Navbar'
import '../styles/global.css'
import mcdlogo from '../images/mcdlogo.png'

export default function Layout( { children } ) {
    return (
        <div className="layout">
            <div className="header">
                <img className="mcdlogo" src={mcdlogo}></img>
                <p className="subtitle">graphic designer | illustrator</p>
            </div>
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer className="footer">
                <p className="foot">@Copyright Maisie Cross Designs 2021</p>
            </footer>
        </div>
    )
}
