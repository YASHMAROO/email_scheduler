import Futuremails from './Futuremails'
import { useState, useEffect } from "react"
import axios from "axios"


const Future = () => {
    const LH = "http://localhost:5000/";

    const [arr, updateMails] = useState([]);
    useEffect(() => {
        getdata()
    }, [arr])
    
    const getdata = () => {
        const user = localStorage.getItem('user');
        if (user) {
            const url = LH + "mails/" + user;
            axios.get(url).then((res) => {
                
                updateMails(res.data.mails)
            })
        }
    }
    return (
        <>
            {
                (arr.length!=0 )?arr.map((item) =>
                    <Futuremails key={item._id} id={item._id} body={item.body} sub={item.subject} to={item.to} />
                ):<h1 className="align-content-center" style={{textAlign:"center" }}>No Mails Scheduled</h1>
            }
        </>
    )
}

export default Future