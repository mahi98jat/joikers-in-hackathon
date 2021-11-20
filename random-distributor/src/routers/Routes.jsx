import { Route } from "react-router"
import { useState } from "react/cjs/react.development"
import { Orders } from "../components/CardContainer/Orders"
import Nav from '../components/Navbar/Nav'

export const Routes = () => {
    const [result,setResult]=useState([])
    return (
        <>
            <Route path="/">
                <Nav setResult={ setResult}/>
                <Orders result={ result}/>
            </Route>
        
            
        </>
    )
}
