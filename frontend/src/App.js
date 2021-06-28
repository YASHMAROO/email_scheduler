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
import PrivateRoute from "./components/PrivateRoute"


export const App = () => {
  const SiteURL = "https://powerful-oasis-11367.herokuapp.com/";
  const LH = "http://localhost:5000/";
  const [user, setUser] = useState(0);
  localStorage.setItem('user', 0);
  const responseGoogle = (response) => {
    console.log(response.profileObj.googleId)
    setUser(response.profileObj.googleId)
    localStorage.setItem('user', response.profileObj.googleId)
  }

  const load = () => {
    window.location.reload();
  }



  return (
    <>
      <Navbar user={user}/>
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
  if (localStorage.getItem('user')!=0) {
      return true;
  }
  return false;

}
      export default App;
