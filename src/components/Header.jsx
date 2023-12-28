import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Header() {
    return (
        <header>
            <Logo />
            <nav>
                <NavLink to="about"
                className={ ({isActive}) => isActive ? 'link-active' : ""}
                >
                    About
                </NavLink>
                <NavLink to="pokemon"
                className={ ({isActive}) => isActive ? 'link-active' : ""}
                >
                    Pokemon
                </NavLink>
            </nav>
        </header>
    )
}