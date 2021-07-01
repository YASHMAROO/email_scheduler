import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import Slide from 'react-reveal/Slide';
import { toast } from 'react-toastify';
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
                className: "custom-style",
                progressClassName: 'custom-progress',

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
                            <div className="card-body text-end">
                                <h5 className="card-title text-start">{sub}</h5>
                                <p className="card-text text-start">{ReactHtmlParser(body)}</p>
                                <button className="btn btn-danger text-end align-items-end" onClick={deleteMail}><AiTwotoneDelete /> Delete</button>

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
