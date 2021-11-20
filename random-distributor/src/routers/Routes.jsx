import { Route, Switch } from "react-router"
import { useState } from "react/cjs/react.development"
import { Orders } from "../components/CardContainer/Orders"
import Nav from '../components/Navbar/Nav'
import Chat from "../components/Chat/Chat";
// import Join from "../components/Join/Join";

export const Routes = () => {
    const [result,setResult]=useState([])
    return (
      <>
        <Switch>
          <Route path="/" exact>
            <Nav setResult={setResult} />
            <Orders result={result} />
            <Nav />
            <Orders />
          </Route>
          {/* <Route path="/chat" exact component={Join}></Route> */}
          <Route path="/chat" component={Chat}></Route>
        </Switch>
      </>
    );
}
