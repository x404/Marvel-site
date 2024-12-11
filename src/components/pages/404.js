import ErrorMessage from '../errorMessage/ErrorMessage'
import {NavLink} from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p>Page doesn't exist</p>
            <NavLink to="/">Back to main page</NavLink>
        </div>
    )
}

export default Page404;