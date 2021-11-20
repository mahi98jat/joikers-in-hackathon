import { Route } from "react-router"
import { Orders } from "../components/CardContainer/Orders"
import Nav from '../components/Navbar/Nav'
import Chat from "../components/Chat/Chat";
// import Join from "../components/Join/Join";

export const Routes = () => {
    return (
        <>
            <Route path="/">
                <Nav/>
                <Orders/>

            </Route>
         {/* <Route path="/" exact component={Join}></Route> */}
        <Route path="/chat" component={Chat}></Route>
     
            
        </>
    )
}
