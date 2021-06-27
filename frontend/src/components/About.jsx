import React from 'react'


const About = () => {
    return (
        <section className="about py-3" style={{ marginTop: "-0rem" }} >
            <dvi className="row  vh-100 align-content-center ">
                <div className="heading text-center py-4 px-2">
                    <h1>About</h1>
                </div>
                <div className="col-md-6">
                    <div className="main px-3" >
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book</h5>
                    </div>
                    <div className="subtitle">
                        <h6 className="text-muted px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div className="d-flex">
                        <img style={{ width: "3.5rem", height: "100px" }} src="/images/react.png"></img>
                        <img style={{ width: "3.5rem", height: "120px" }} src="/images/nodejs.png"></img>
                        <img style={{ width: "3.5rem", height: "120px" }} src="/images/mongodb.png"></img>
                        <img style={{ width: "3.5rem", height: "100px" }} src="/images/aws.png"></img>
                        <img style={{ width: "3.5rem", height: "120px" }} src="/images/bootstrap.png"></img>
                        <img style={{ width: "3.5rem", height: "100px" }} src="/images/icons.svg"></img>
                    </div>
                </div>
                <div className="col-md-6 align-items-center">
                    <div className="px-3">
                        <div className="fst-bold px-3">React JS</div>
                        <div class="progress ">
                            <div class="progress-bar w-75  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">Node JS</div>
                        <div class="progress ">
                            <div class="progress-bar w-50  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">Mongo DB</div>
                        <div class="progress ">
                            <div class="progress-bar w-25  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">Amazon web Services</div>
                        <div class="progress ">
                            <div class="progress-bar w-75  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">Bootstrap</div>
                        <div class="progress ">
                            <div class="progress-bar w-100  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">React Icons</div>
                        <div class="progress ">
                            <div class="progress-bar w-50  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                </div>

            </dvi>
        </section>
    )
}

export default About
