import { useRouteError } from "react-router-dom"

export default function Error(){
    console.error(useRouteError)
    return(
        <div id="error-page" className="Main">
            <h1>OOps!</h1>
            <p>Sorry, this page doesn't exist.</p>
        </div>
    )


}

