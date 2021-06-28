import SingleMail from './SingleMail'
import { useState, useEffect } from "react"

import axios from "axios"

const History = () => {
    const LH = "http://localhost:5000/";
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
            {
                arr.length ? arr.map((item) =>
                    <SingleMail key={item._id} id={item._id} body={item.body} sub={item.subject} to={item.to} date={item.date} />
                ):<h1  style={{textAlign:"center" }}>No Mails Sent</h1>
            }
        </>
    )
}

export default History