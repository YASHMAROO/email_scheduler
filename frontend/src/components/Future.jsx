import react, { useState, useEffect } from 'react'
import Futuremails from './Futuremails'
import axios from "axios"

const Future = ({ arr }) => {
    return (
        <>
            {
                arr.length && arr.map((item) =>
                    <Futuremails key={item._id} id={item._id} body={item.body} sub={item.subject} to={item.to} />
                )
            }
        </>
    )
}

export default Future