import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import { Route, Switch, NavLink } from "react-router-dom"
import Mail from './components/Mail';
import { useState } from "react"
import Future from "./components/Future"
import History from './components/History';
import { GoogleLogin, GoogleLogout } from "react-google-login"
import { GrMail } from "react-icons/gr"
import PrivateRoute from './components/PrivateRoute'
import Error from "./components/Error"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './components/delete.css'

const App = () => {
  const [user, setuser] = useState(0)
  localStorage.setItem('user', 0)


  const responseGoogle = (response) => {
    setuser(response.profileObj.googleId)
    if (response.profileObj.googleId) {
      toast("Logged In Successfully", {
        className: "custom-style",
        progressClassName: 'custom-progress',
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
    }
    localStorage.setItem('user', response.profileObj.googleId)
  }

  const load = () => {

    toast.warn("Logged Out Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,

    });
    setTimeout(() => { window.location.reload() }, 1000);

  }


  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-warning " >
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><GrMail size={32} /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item  ">
                <NavLink to="/" className="nav-link active  " aria-current="page">Home </NavLink>

              </li>
              {
                (user !== 0) ?
                  <NavLink to="/mail" className="nav-link active  " aria-current="page">Send Mails</NavLink> : <h1> </h1>

              }
              <li className="nav-item">
                <NavLink to="/team" className="nav-link active  " aria-current="page">Team</NavLink>
              </li>
              {(user != 0) ?
                <>
                  <li className="nav-item">
                    <NavLink to="/history" className="nav-link active  " aria-current="page">History</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/futuremails" className="nav-link active  " aria-current="page">Scheduled Mails</NavLink>
                  </li></> : null
              }



            </ul>


          </div>
        </div>
      </nav>

      {
        (user === 0) ?
          <div className="m-3">
            <GoogleLogin
              clientId="1099252555614-t7njjdio9amae9b7d52oc8qju53nlb2h.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'} />
          </div>
          :
          <>
            <button onClick={load} className="m-3 p-0"> <GoogleLogout
              clientId="1099252555614-t7njjdio9amae9b7d52oc8qju53nlb2h.apps.googleusercontent.com"
              buttonText="Logout"
            /></button>


          </>
      }

      <Switch>

        <Route exact path="/">

          <Home user={user} />

          <About />

          <Team />

        </Route>

        <PrivateRoute exact path="/futuremails" component={Future} />

        <PrivateRoute exact path="/history" component={History} />

        <PrivateRoute exact path="/mail" component={Mail} />

        <Route exact path="/team">

          <Team />

        </Route>

        <Route path="*">
          <Error />
        </Route>

      </Switch>
      <Footer />
    </>
  );
}
export const isLogin = () => {
  if (localStorage.getItem('user') != 0) {
    return true;
  }
  return false;

}
export default App;
