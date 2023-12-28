import { Link } from 'react-router-dom'
import logo from '../assets/pokeball.png'

export default function Logo() {
    return (
        <Link to="/" className='logo'>
            <img src={logo} alt='logo' height='48' width='48'/>
            <h1>Poke <span>Filter</span></h1>
        </Link>
    )
}