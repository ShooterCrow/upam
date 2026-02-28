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
import Events from './pages/events/Events'
import EventDetail from './pages/events/EventDetail'
import CreateEvent from './pages/events/CreateEvent'
import EventsHelpSupport from './pages/events/EventsHelpSupport'
import EventsTickets from './pages/events/EventsTickets'
import TicketsForm from './pages/events/TicketsForm'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import ForgottenPassword from './pages/auth/ForgottenPassword'
import PersistLogin from './pages/authenticationPages/PersistLogin'
import RequireAuth from './pages/authenticationPages/RequireAuth'
import Dashboard from './pages/UserAdminPages/common/Dashboard'
import MemberVerification from './pages/UserAdminPages/common/MemberVerification'
import EmergencyContact from './pages/UserAdminPages/common/EmergencyContact'
import Notification from './pages/UserAdminPages/common/Notification'
import Support from './pages/UserAdminPages/common/Support'
import MemberApplication from './pages/UserAdminPages/admin/MemberApplication'
import MyProfile from './pages/UserAdminPages/common/MyProfile'
import UPAMCalender from './pages/UserAdminPages/common/UPAMCalender'
import AllMembers from './pages/UserAdminPages/admin/AllMembers'
import MemberDetail from './pages/UserAdminPages/admin/detailPages/MemberDetail'
import NotFound from './pages/NotFound'
import MembershipPayment from './pages/UserAdminPages/common/MembershipPayment'


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
            <Route path="membership-policy" element={<MembershipPolicy />} />
            <Route path="membership-agreement" element={<MembershipAgreement />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="events">
              <Route index element={<Events />} />
              <Route path="create" element={<CreateEvent />} />
              <Route path="help" element={<EventsHelpSupport />} />
              <Route path="tickets">
                <Route index element={<EventsTickets />} />
                <Route path="form" element={<TicketsForm />} />
              </Route>
              <Route path=":slug" element={<EventDetail />} />
            </Route>

            <Route path="publications">
              <Route index element={<Publications />} />
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
              <Route index element={<Dashboard />} />
              <Route path='member-verification' element={<MemberVerification />} />
              <Route path='membership-payment' element={<MembershipPayment />} />
              <Route path='emergency-contact' element={<EmergencyContact />} />
              <Route path='notification' element={<Notification />} />
              <Route path='support' element={<Support />} />
              <Route path='all-members' element={<AllMembers />} />
              <Route path='members-application'>
                <Route index element={<MemberApplication />} />
                <Route path=":id" element={<MemberDetail />} />
              </Route>
              <Route path='my-profile' element={<MyProfile />} />
              <Route path='calendar' element={<UPAMCalender />} />
            </Route>
          </Route>

          {/* User Routes */}
          <Route element={<RequireAuth allowedRoles={['user', "admin", "manager"]} />}>
            <Route path="/user" element={<UserLayoutContext />}>
              <Route index element={<Dashboard />} />
              <Route path='member-verification' element={<MemberVerification />} />
              <Route path='calendar' element={<UPAMCalender />} />
              <Route path='membership-payment' element={<MembershipPayment />} />
              <Route path='emergency-contact' element={<EmergencyContact />} />
              <Route path='notification' element={<Notification />} />
              <Route path='support' element={<Support />} />
              <Route path='my-profile' element={<MyProfile />} />
            </Route>
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
