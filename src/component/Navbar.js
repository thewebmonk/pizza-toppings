import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top  bg-dark text-dark">
            <a className="navbar-brand" href="/">Pizza Order</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
                </li>
            </ul>
            </div>
      </nav>
    )
}
