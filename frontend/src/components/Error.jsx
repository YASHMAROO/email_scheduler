import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <div className="container-fluid " style={{ marginTop: "-10%" }}>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12 ">
                        <img className=" vh-50 w-50 rounded mx-auto d-block" src="/images/error.jpg" alt="Page Not found"/>
                    </div>
                    <NavLink to="/" className=" justify-content-center " style={{ marginLeft: "72%" }} ><button className="btn btn-warning w-25 justify-content-center">Home</button></NavLink>
                </div>

            </div>
        </div>
    )
}

export default Error
