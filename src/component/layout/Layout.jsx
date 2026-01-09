import { Outlet } from 'react-router-dom'
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

    return (
        <>
            <Header
            // isLoggedIn={isLoggedIn}
            // isOnDashboard={isOnDashboard}
            />
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout