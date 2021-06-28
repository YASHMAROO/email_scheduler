import { React } from 'react'
import { Link } from 'react-router-dom'



const Home = ({user}) => {



    return (
        <>
        <section className="Home">
            <div className="container-fluid">
                <div className="row bg-transparent  vh-100 align-content-center align-items-center">
                    <div className="col-md-6 ">
                        <div className="content  py-3">
                            <div className="text-left px-5">
                                <h4 className="  text-dark justify-content-lg-start  fst-italic">-Welcome to</h4>
                                <h2 className=" fst-italic">Email Scheduling Application</h2>
                                <h5 className="text-muted">An online application where you can schedule your E-mails </h5>
                            </div>
                            {
                                (user!=0) ? <Link to="/mail" className="btn btn-warning m-5 p-3" style={{width:"110px"}}>Send Mail</Link>:null

                            }
                        </div>
                    </div>
                    <div className="col-md-6 order-first-md">
                        <img  style={{ width: "100%" }} src="/images/bg.jpg" alt="img"></img>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Home
