import { useRouteError } from "react-router-dom"
import Header from "./Header";
const Error = ()=>{
    const err = useRouteError(); 
    console.log(err);
    return(
        <div>
            <Header />
            <h1>OOPS! something went wrong</h1>
            {err.status + " " + err.statusText}
        </div>
    )
}
export default Error