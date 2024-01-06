import { useRouteError, Link } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="err-gen">
            <h1>There was an error:</h1>
            <p>{error.message}</p>
            <Link to="/"><button className='homepage-btn'>Back to Homepage</button></Link>
        </div>
    )
}