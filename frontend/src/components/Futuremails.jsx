import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import Slide from 'react-reveal/Slide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios'
import { AiTwotoneDelete } from 'react-icons/ai'
import './delete.css'


const Futuremails = ({ body, sub, to, key, id }) => {
    const LH = "https://powerful-oasis-11367.herokuapp.com/";
    const deleteMail = () => {

        const userid = localStorage.getItem('user');
        axios.delete(LH + "delete_mail/" + id, { data: { userId: userid } }).then((res) => {
            toast.warn(res.data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className:"custom-style",
                progressClassName:'custom-progress',

            });
        }
        ).catch((error) => {
            console.error("error: ", error);
        });


    }

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
                                < AiTwotoneDelete size={32} onClick={deleteMail} />

                            </div>
                        </div>
                    </div>
                </Slide> : <h1>No mails Scheduled</h1>
            }
        </>
    )
}

export default Futuremails
