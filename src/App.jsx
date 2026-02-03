import { Route, Routes } from 'react-router-dom'
import Layout from './component/layout/Layout'
import AdminLayoutContext from './component/layout/AdminLayoutContext'
import UserLayoutContext from './component/layout/UserLayoutContext'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import GetInvolve from './pages/getInvolve/getInvolve'
import Platform from './pages/platform/Platform'
import ContactUs from './pages/contactUs/ContactUs'
import Partnership from './pages/partnership/Partnership'
import Volunteer from './pages/volunteer/Volunteer'
import Publications from './pages/publications/Publications'
import DigitalLiteracy from './pages/publications/articles/DigitalLiteracy'
import PanAfricanUnity from './pages/publications/articles/PanAfricanUnity'
import About from './pages/about/About'
import MembershipPolicy from './pages/membershipPolicy/MembershipPolicy'
import MembershipAgreement from './pages/membershipAgreement/MembershipAgreement'
import Leadership from './pages/leadership/Leadership'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import ForgottenPassword from './pages/auth/ForgottenPassword'
import PersistLogin from './pages/authenticationPages/PersistLogin'
import RequireAuth from './pages/authenticationPages/RequireAuth'


const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Public Routes */}
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="get-involved" element={<GetInvolve />} />
            <Route path="publications" element={<Publications />} />
            <Route path="membership-policy" element={<MembershipPolicy />} />
            <Route path="membership-agreement" element={<MembershipAgreement />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="leadership" element={<Leadership />} />

            <Route path="research">
              <Route path='panafrican-unity' element={<PanAfricanUnity />} />
              <Route path="digital-literacy" element={<DigitalLiteracy />} />
            </Route>

            {/* Auth Routes */}
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgottenPassword />} />
            <Route path="platforms" element={<Platform />} />

            {/* Protected Routes */}
            <Route element={<RequireAuth />}>
            </Route>


          </Route>

          {/* Admin Routes */}
          <Route element={<RequireAuth allowedRoles={['admin', "manager"]} />}>
            <Route path="/admin" element={<AdminLayoutContext />}>
              <Route index element={<div className="p-4">Admin Dashboard Area</div>} />
            </Route>
          </Route>

          {/* User Routes */}
          <Route element={<RequireAuth allowedRoles={['user', "admin", "manager"]} />}>
            <Route path="/user" element={<UserLayoutContext />}>
              <Route index element={<div className="p-4">User Dashboard Area</div>} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App
