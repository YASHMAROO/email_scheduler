import React from 'react'
import { NavLink } from 'react-router-dom'
import { GrMail } from "react-icons/gr"

const Navbar = ({user}) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-warning " style={{ marginTop: "-30px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><GrMail size={32} /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  justify-content-center">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active  " aria-current="page">Home </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/team" className="nav-link active  " aria-current="page">Team</NavLink>
                            </li>
                            {
                                user?
                                <>
                                <li className="nav-item">
                                <NavLink to="/history" className="nav-link active  " aria-current="page">History</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/futuremails" className="nav-link active  " aria-current="page">Future Mails</NavLink>
                                </li></>:null
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
