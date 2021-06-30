import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import Slide from 'react-reveal/Slide';

const Futuremails = ({ body, sub, to, key }) => {

    return (
        <>
            {
                (body !== 0) ? <Slide to bottom>
                    <div className="col-md-6 col-lg-12 pb-4 ">
                        <div className="card text-dark bg-warning m-3 shadow">
                            <div className="card-header text-start">{to}</div>
                            <div className="card-body text-start">
                                <h5 className="card-title ">{sub}</h5>
                                <p className="card-text">{ReactHtmlParser(body)}</p>
                            </div>
                        </div>
                    </div>
                </Slide> : <h1>No mails Scheduled</h1>
            }
        </>
    )
}

export default Futuremails
