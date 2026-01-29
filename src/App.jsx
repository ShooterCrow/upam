import { Route, Routes } from 'react-router-dom'
import Layout from './component/layout/Layout'
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

            <Route path="research">
              <Route path='panafrican-unity' element={<PanAfricanUnity />} />
              <Route path="digital-literacy" element={<DigitalLiteracy />} />
            </Route>

            {/* Auth Routes */}
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgottenPassword />} />

            {/* Protected Routes */}
            <Route element={<RequireAuth />}>
              <Route path="platforms" element={<Platform />} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
