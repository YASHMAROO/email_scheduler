import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import { Route, Switch, NavLink } from "react-router-dom"
import Mail from './components/Mail';
import { useState, useEffect } from "react"
import Future from "./components/Future"
import History from './components/History';
import { GoogleLogin, GoogleLogout } from "react-google-login"
import axios from "axios"
import { GrMail } from "react-icons/gr"
import PrivateRoute from './components/PrivateRoute'


const App = () => {
  const [user, setuser] = useState(0)
  localStorage.setItem('user', 0)


  const responseGoogle = (response) => {
    console.log(response)
    setuser(response.profileObj.googleId)
    localStorage.setItem('user', response.profileObj.googleId)
  }

  const load = () => {
    window.location.reload();
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
                  <NavLink to="/mail" className="nav-link active  " aria-current="page">Send Mails</NavLink> : <h1></h1>

              }
              <li className="nav-item">
                <NavLink to="/team" className="nav-link active  " aria-current="page">Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/history" className="nav-link active  " aria-current="page">History</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/futuremails" className="nav-link active  " aria-current="page">Scheduled Mails</NavLink>
              </li>



            </ul>


          </div>
        </div>
      </nav>

     

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
