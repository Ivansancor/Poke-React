import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Header() {
    return (
        <header>
            <Logo />
            <nav>
                <Link to="about">About</Link>
                <Link to="something">Something else</Link>
            </nav>
        </header>
    )
}