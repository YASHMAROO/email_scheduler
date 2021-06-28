import React from "react"
import { Route, Redirect } from "react-router-dom"
import {isLogin} from '../App'

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                return (isLogin()) ? <Component {...props} /> : <Redirect to="/" />
            }}
        ></Route>
    )
}