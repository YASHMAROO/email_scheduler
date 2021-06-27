import react, { useState, useEffect } from 'react'
import SingleMail from './SingleMail'
import axios from "axios"

const History = ({ arr }) => {
    return (
        <>
            {
                arr.length && arr.map((item) =>
                    <SingleMail key={item._id} id={item._id} body={item.body} sub={item.subject} to={item.to} date={item.date} />
                )
            }
        </>
    )
}

export default History