import React from 'react'
import { FaGithubAlt, FaLinkedin } from "react-icons/fa"

const Team = () => {
    return (
        <>
            <section className="team">
                <div className="Services py-5 ">
                    <div className="container-lg py-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section_title text-center">
                                    <h2 className="fw-bold mb-5 text-dark">Our Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center px-5">
                        <div className="col-md-6 col-lg-3 pb-4">
                            <div className="card">
                                <img className="card-img-top " src="/images/yash.jpg" alt="Cardcap" />
                                <div className="card-body">
                                    <h5 className="card-title">Yash Maroo</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://github.com/YASHMAROO" className="btn btn-warning fs-5 me-4"><FaGithubAlt /></a>
                                    <a href="https://www.linkedin.com/in/yash-m-840830133/" className="btn btn-warning "><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-4">
                            <div className="card"  >
                                <img className="card-img-top " src="/images/pancho.jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Vedang Pancholi</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://github.com/vp4321" className="btn btn-warning fs-5 me-4"><FaGithubAlt /></a>
                                    <a href="https://www.linkedin.com/in/vedang-pancholi-51a2291a8/" className="btn btn-warning "><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-4">
                            <div className="card" >
                                <img className="card-img-top " src="/images/arin17.jpg" alt="Cardcap" />
                                <div className="card-body">
                                    <h5 className="card-title">Bishwajit Ghosh</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://github.com/arin17bishwa" className="btn btn-warning fs-5 me-4"><FaGithubAlt /></a>
                                    <a href="https://www.linkedin.com/in/bishwajit-ghosh-6a896b1a3/" className="btn btn-warning "><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-4">
                            <div className="card">
                                <img className="card-img-top " src="/images/subham.jpg" alt="Cardcap" />
                                <div className="card-body">
                                    <h5 className="card-title">Subham Gupta</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://github.com/SubhamGupta007" className="btn btn-warning fs-5 me-4"><FaGithubAlt /></a>
                                    <a href="https://www.linkedin.com/in/subham-gupta-2398361a9/" className="btn btn-warning "><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Team
