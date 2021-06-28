
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const SingleMail = ({ body, sub, to, key, date }) => {
    return (
        <>
            <div className="container-fluid py-4  ">
                <div className="row">
                    <div className="d-flex col">
                        {/* <table class="table table-warning ">
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
                                    <td className="text-center" style={{overflowrap:"break-word"}}>{ReactHtmlParser(body)}</td>
                                    <td className="text-center">{date}</td>
                                </tr>

                            </tbody>
                        </table> */}
                        <div className="card bg-warning border-secondary text-wrap" style={{width: "100%"}}>
                                <div className="card-body" >
                                    <h2 classNames="card-title">{sub}</h2>
                                    <p classNames="card-text" >To: {to}</p>
                                    <h5 className="card-text text-wrap">{ReactHtmlParser(body)}</h5>
                                </div>
                        </div>
                        </div>
                    </div>

                </div>

        </>
            )
}

            export default SingleMail