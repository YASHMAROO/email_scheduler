import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import { Route, Switch,Link } from "react-router-dom"
import Mail from './components/Mail';
import { useState, useEffect, useRef } from "react"
import Future from "./components/Future"
import History from './components/History';
import { GoogleLogin, GoogleLogout } from "react-google-login"
// import PrivateRoute from './components/PrivateRoute'
import axios from "axios"

const App = () => {
  const [user, setuser] = useState(0)
  const responseGoogle = (response) => {
    setuser(response.profileObj.googleId)
  }
  const load = () => {
    window.location.reload();

  }
  const [arr, updateMails] = useState([]);
  const [arr2, sentMails] = useState([]);
  useEffect(() => {
    getdata2()
    getdata()

    // console.log("aa");
  }, [])
  // console.log(props);
  const getdata = () => {
    try {
      const url = "http://localhost:5000/mails/"+user;
      axios.get(url).then((res) => {
        console.log(res.data)
        updateMails(res.data.mails)
      })
    }
    catch (err) {
      return err;
    }
  }
  const getdata2 = () => {
    try {
      const url2 = "http://localhost:5000/sent_mails/"+user;
      axios.get(url2).then((res) => {
        // console.log(res)
        sentMails(res.data.mails)
      })
    }
    catch (err) {
      return err;
    }
  }
  return (
    <>
      <Navbar />
      {
        (user == 0) ?
          <GoogleLogin
            clientId="1099252555614-t7njjdio9amae9b7d52oc8qju53nlb2h.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'} />
          :
          <>
            <button onClick={load} className="p-0 m-3"> <GoogleLogout
              clientId="1099252555614-t7njjdio9amae9b7d52oc8qju53nlb2h.apps.googleusercontent.com"
              buttonText="Logout"
            /></button>
            <div className="container-fluid">
              <div className="row">
                <Link to="/mail" className="btn btn-primary w-15 m-3">Send Mail</Link>
              </div>

            </div>

          </>
      }

      <Switch>
        <Route exact path="/futuremails" >
          <Future arr={arr} />
        </Route>
        <Route path="/history">
          <History arr={arr2} />
        </Route>
        <Route exact path="/">
          <Home />
          <About />
          <Team />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/mail">
          <Mail user={user}/>
        </Route>
        <Route exact path="/team" component={Team} />
        <Route exact path="/mail" component={Mail} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
