import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='bod-div'>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}