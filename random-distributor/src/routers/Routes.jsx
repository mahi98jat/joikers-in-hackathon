import { Route } from "react-router"
import { useState } from "react/cjs/react.development"
import { Orders } from "../components/CardContainer/Orders"
import Nav from '../components/Navbar/Nav'
import Chat from "../components/Chat/Chat";
// import Join from "../components/Join/Join";

export const Routes = () => {
    const [result,setResult]=useState([])
    return (
        <>
            <Route path="/">
                <Nav setResult={ setResult}/>
                <Orders result={ result}/>
                <Nav/>
                <Orders/>
            </Route>
         {/* <Route path="/" exact component={Join}></Route> */}
        <Route path="/chat" component={Chat}></Route>
     
            
        </>
    )
}
