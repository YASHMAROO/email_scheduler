import react, { useState, useEffect } from 'react'

const SingleMail = ({ body, sub, to, key, date }) => {
    return (
        <>
            <div className="container-fluid py-4  ">
                <div className="row">
                    <div className="col-lg-12 md-4">
                        <table class="table table-warning ">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Mail</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">{to}</td>
                                    <td className="text-center">{sub}</td>
                                    <td className="text-center">{body}</td>
                                    <td className="text-center">{date}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SingleMail