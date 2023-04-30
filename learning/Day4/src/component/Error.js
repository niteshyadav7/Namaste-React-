
import { useRouteError } from "react-router-dom";

const Error=()=>{
    
    const error=useRouteError()
    return(
        <div>
            <h1>Oops!</h1>
            <div>Something went wrong!</div>
            <div>
            <i>{error.statusText || error.message}</i>
            </div>
        </div>
    )
}
export default Error;