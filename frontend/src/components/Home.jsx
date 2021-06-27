import { React, createContext } from 'react'
import { useState } from 'react'
import { GoogleLogin, GoogleLogout } from "react-google-login"
import Navbar from "./Navbar"
import { NavLink } from 'react-router-dom'
import App from "../App"


const Home = () => {


    return (

        <section className="Home">
            <div className="container-fluid">
                <div className="row bg-transparent  vh-100 align-content-center align-items-center">
                    <div className="col-md-6 ">
                        <div className="content  py-3">
                            <div className="text-left px-5">
                                <h4 className="  text-dark justify-content-lg-start  fst-italic">-Welcome to</h4>
                                <h2 className=" fst-italic">Email Scheduling Application</h2>
                                <h5 className="text-muted">An online application where you can schedule your E-mails </h5>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-first-md">
                        <img className="" style={{ width: "100%" }} src="/images/bg.jpg" alt="image"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
