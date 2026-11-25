import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import useScrollRestoration from '../../hooks/useScrollRestoration'

const Layout = () => {
    const { pathname } = useLocation()
    useScrollRestoration()
    const noPaddingComponents = ["/register", "/login", "/verify-email", "/reset-password", "/donation", "/about", "/leadership", "/chapters", "/get-involved", "/contact-us", "/search", "/membership-policy", "/terms", "/privacy", "/cookies"]

    return (
        <>
            <Header />
            <main className={`${noPaddingComponents.includes(pathname) ? '' : 'pt-[100px] lg:pt-[120px]'}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout