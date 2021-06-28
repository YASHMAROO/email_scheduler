import React from 'react'

const Futuremails = ({ body, sub, to, key }) => {
    return (
        <>
            <div className="col-md-6 col-lg-3 pb-4 ">
                <div className="card text-dark bg-warning m-3 shadow" style={{ width: "18rem" }}>
                    <div className="card-header">{to}</div>
                    <div className="card-body">
                        <h5 className="card-title">{sub}</h5>
                        <p className="card-text">{body}</p>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Futuremails
