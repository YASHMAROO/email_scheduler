import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import { Route, Switch } from "react-router-dom"
import Mail from './components/Mail';
import { useState, useEffect } from "react"
import Future from "./components/Future"
import History from './components/History';
import { GoogleLogin, GoogleLogout } from "react-google-login"
import axios from "axios"


const App = () => {
  const [user, setuser] = useState(0)
  const responseGoogle = (response) => {
    console.log(response.profileObj.googleId)
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
  }, [arr,arr2])

  const getdata = () => {
    if(!user) {
      const url = "http://localhost:5000/mails/"+user;
      axios.get(url).then((res) => {
        // console.log(res.data)
        updateMails(res.data.mails)
      })
    }
  }
  const getdata2 = () => {
    if(!user) {
      const url2 = "http://localhost:5000/sent_mails/"+user;
      axios.get(url2).then((res) => {
        // console.log(res)
        sentMails(res.data.mails)
      })
    }
  }
  return (
    <>
      <Navbar />
      {
        (user == 0) ?
        <div className="m-3 mt-5">
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
            <button onClick={load} className="p-0 m-3 mt-5"> <GoogleLogout
              clientId="1099252555614-t7njjdio9amae9b7d52oc8qju53nlb2h.apps.googleusercontent.com"
              buttonText="Logout"
            /></button>
            

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
          <Home user={user}/>
          <About />
          <Team />
        </Route>
        <Route exact path="/mail">
          <Mail user={user}/>
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/mail" component={Mail} />
        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
