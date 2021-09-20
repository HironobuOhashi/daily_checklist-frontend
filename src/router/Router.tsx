import { Route, Switch } from "react-router"
import { Home } from "../pages/Home"
import { Chart } from "../pages/Chart"
import { Login } from "../pages/Login"

export const Router = () => {
    return(
    <Switch>
        <Route exact path="/">
            <Login />
        </Route>
        <Route path="/Home">
            <Home />
        </Route>
        <Route path="/Chart">
            <Chart />
        </Route>

    </Switch>
    )
}