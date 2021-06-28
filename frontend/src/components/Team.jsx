import React from 'react'
import { FaGithubAlt, FaLinkedin } from "react-icons/fa"
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

const Team = () => {
    return (
        <>
            <section className="team mt-3">
                <div className="Services py-5 ">
                    <div className="container-lg py-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section_title text-center">
                                    <Bounce>
                                        <h1 className="fw-bold mb-5 text-dark">Our Team</h1>
                                    </Bounce>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center px-5">
                        <Slide to left>
                            <div className="col-md-6 col-lg-3 pb-4">

                                <div className="card shadow">

                                    <img className="card-img-top " src="/images/yash.jpg" alt="Cardcap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Yash Maroo</h5>
                                        <p className="card-text">ECE, NIT Durgapur</p>
                                        <a href="https://github.com/YASHMAROO" className="btn btn-warning fs-5 me-4"><FaGithubAlt /></a>
                                        <a href="https://www.linkedin.com/in/yash-m-840830133/" className="btn btn-warning "><FaLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide to top>
                            <div className="col-md-6 col-lg-3 pb-4">
                                <div className="card shadow"  >
                                    <img className="card-img-top " src="/images/pancho.jpg" alt="Card cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Vedang Pancholi</h5>
                                        <p className="card-text">CSE, NIT Durgapur</p>
                                        <a href="https://github.com/vp4321" className="btn btn-warning fs-5 me-4"><FaGithubAlt /></a>
                                        <a href="https://www.linkedin.com/in/vedang-pancholi-51a2291a8/" className="btn btn-warning "><FaLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide to bottom>
                            <div className="col-md-6 col-lg-3 pb-4">
                                <div className="card shadow" >
                                    <img className="card-img-top " src="/images/arin17.jpg" alt="Cardcap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Bishwajit Ghosh</h5>
                                        <p className="card-text">ECE, NIT Durgapur</p>
                                        <a href="https://github.com/arin17bishwa" className="btn btn-warning fs-5 me-4"><FaGithubAlt /></a>
                                        <a href="https://www.linkedin.com/in/bishwajit-ghosh-6a896b1a3/" className="btn btn-warning "><FaLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide to right>
                            <div className="col-md-6 col-lg-3 pb-4">
                                <div className="card shadow">
                                    <img className="card-img-top " src="/images/subham.jpg" alt="Cardcap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Subham Gupta</h5>
                                        <p className="card-text">EEE, NIT Durgapur</p>
                                        <a href="https://github.com/SubhamGupta007" className="btn btn-warning fs-5 me-4"><FaGithubAlt /></a>
                                        <a href="https://www.linkedin.com/in/subham-gupta-2398361a9/" className="btn btn-warning "><FaLinkedin /></a>
                                    </div>
                                </div>

                            </div>

                        </Slide>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Team
