import { useRouteError } from "react-router-dom"
const Error = ()=>{
    const err = useRouteError(); 
    return(
        <div>
            <h1>OOPS! something went wrong</h1>
            {err.status + " " + err.statusText}
        </div>
    )
}
export default Error