import { Link } from 'react-router-dom'

export default function Err404() {
    return (
        <div className='err404'>
            <h1>404 Not Found</h1>
            <h2>Error: This page does not exist.</h2>
            <Link to="/"><button className='homepage-btn'>Back to Homepage</button></Link>
        </div>
    )
}