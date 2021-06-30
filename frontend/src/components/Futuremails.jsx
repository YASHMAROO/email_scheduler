import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import Slide from 'react-reveal/Slide';
import axios from "axios"
import { AiFillDelete } from "react-icons/ai"

const Futuremails = ({ body, sub, to, key, id }) => {
    const url = "https://powerful-oasis-11367.herokuapp.com/delete_mail/"


    return (

        <>
            {
                (body != 0) ? <Slide to bottom>
                    <div className="col-md-6 col-lg-12 pb-4 ">
                        <div className="card text-dark bg-warning m-3 shadow">
                            <div className="card-header text-start">{to}</div>
                            <div className="card-body text-end">
                                <h5 className="card-title text-start">{sub}</h5>
                                <p className="card-text text-start">{ReactHtmlParser(body)}</p>
                                <button className="btn btn-danger  justify-content-end align-content-end" value={id} onClick={() => {
                                    console.log(id);
                                    const userid = localStorage.getItem('user');
                                    axios.delete(url + id, { data: { userid: userid } }).then((response) => {
                                        console.log(response)
                                    })
                                }}><AiFillDelete /> Delete</button>
                            </div>

                        </div>
                    </div>
                </Slide> : <div className="col-md-6 col-lg-12 pb-4 ">
                    <div className="card text-dark bg-warning m-3 shadow">
                        <div className="card-header text-center fw-bold p-5"><h2>No Mails Scheduled !!</h2></div>
                    </div>
                </div>
            }


        </>

    )
}

export default Futuremails
