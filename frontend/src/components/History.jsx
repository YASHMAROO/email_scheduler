import SingleMail from './SingleMail'
import { useState, useEffect } from 'react'
import axios from "axios"


const History = () => {
    const LH = "https://powerful-oasis-11367.herokuapp.com/";
    const [arr, sentMails] = useState([]);
    useEffect(() => {
        getdata()
    }, [arr])
    const getdata = () => {
        const user = localStorage.getItem('user');
        if (user) {
            const url2 = LH + "sent_mails/" + user;
            axios.get(url2).then((res) => {
                sentMails(res.data.mails)
            })
        }
    }
    return (
        <>
            <div className="row text-center px-5">

                {
                    (arr.length !== 0) ? arr.map((item) =>
                        <SingleMail key={item._id} id={item._id} body={item.body} sub={item.subject} to={item.to} date={item.date} />
                    ) : <h1 className="align-content-center" style={{ textAlign: "center" }}>No Mails Sent</h1>
                }

            </div>
        </>
    )
}

export default History