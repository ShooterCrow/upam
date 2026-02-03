import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    // You'll need to determine these values based on your auth state and current route
    // Example using a auth context and route checking:
    // const { user } = useAuth();
    // const location = useLocation();
    // const isLoggedIn = !!user;
    // const isOnDashboard = location.pathname.startsWith('/dashboard');

    const isLoggedIn = false; // Replace with your actual auth state
    const isOnDashboard = false; // Replace with your actual route checking logic

    const { pathname } = useLocation()
    const noPaddingComponents = ["/register", "/login"]

    return (
        <>
            <Header
            // isLoggedIn={isLoggedIn}
            // isOnDashboard={isOnDashboard}
            />
            <main className={`${noPaddingComponents.includes(pathname) ? '' : 'pt-12 lg:pt-20'}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout