import { Route } from "react-router"
import { Orders } from "../components/CardContainer/Orders"
import Nav from '../components/Navbar/Nav'

export const Routes = () => {
    return (
        <>
            <Route path="/">
                <Nav/>
                <Orders/>
            </Route>
        
            
        </>
    )
}
