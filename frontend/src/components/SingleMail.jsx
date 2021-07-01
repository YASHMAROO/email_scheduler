import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import Slide from 'react-reveal/Slide';

const SingleMail = ({ body, sub, to, key, date }) => {

    return (
        <>
            {
                (body != 0) ? <Slide to bottom>
                    <div className="col-md-6 col-lg-12 pb-4 ">
                        <div className="card text-dark bg-warning m-3 shadow">
                            <div className="card-header text-start">{to}</div>
                            <div className="card-body text-start">
                                <h5 className="card-title ">{sub}</h5>
                                <p className="card-text">{ReactHtmlParser(body)}</p>
                                <p className="card-text  fw-bold ">{date}</p>
                            </div>
                        </div>
                    </div>
                </Slide> : <div className="col-md-6 col-lg-12 pb-4 ">
                    <div className="card text-dark bg-warning m-3 shadow">
                        <div className="card-header text-center fw-bold p-5"><h2>No Mails Sent !!</h2></div>
                    </div>
                </div>
            }


        </>

    )
}

export default SingleMail
