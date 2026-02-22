import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import EventsNavbar from './EventsNavbar'

const Layout = () => {
    const { pathname } = useLocation()
    const noPaddingComponents = ["/register", "/login"]
    const isEventsPage = pathname.startsWith('/events')

    return (
        <>
            {isEventsPage ? <EventsNavbar /> : <Header />}
            <main className={`${noPaddingComponents.includes(pathname) ? '' : isEventsPage ? 'pt-[72px] lg:pt-[80px]' : 'pt-[160px] lg:pt-[180px]'}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout