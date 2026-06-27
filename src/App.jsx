import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

// Layouts (Keep eager for immediate shell rendering)
import Layout from './component/layout/Layout';
import AdminLayoutContext from './component/layout/AdminLayoutContext';
import UserLayoutContext from './component/layout/UserLayoutContext';

// Guards (Keep eager for routing stability)
import PersistLogin from './pages/authenticationPages/PersistLogin';
import RequireAuth from './pages/authenticationPages/RequireAuth';
import ProfileCompletionGuard from './pages/authenticationPages/ProfileCompletionGuard';
import RoleRedirectGuard from './pages/authenticationPages/RoleRedirectGuard';
import AutoRecovery from './component/common/AutoRecovery';

// Lazy Loaded Page Components
const Home = lazy(() => import('./pages/home/Home'));
const Gallery = lazy(() => import('./pages/gallery/Gallery'));
const GetInvolve = lazy(() => import('./pages/getInvolve/getInvolve'));
const Platform = lazy(() => import('./pages/platform/Platform'));
const ContactUs = lazy(() => import('./pages/contactUs/ContactUs'));
const Partnership = lazy(() => import('./pages/partnership/Partnership'));
const Volunteer = lazy(() => import('./pages/volunteer/Volunteer'));
const Publications = lazy(() => import('./pages/publications/Publications'));
const DigitalLiteracy = lazy(() => import('./pages/publications/articles/DigitalLiteracy'));
const PanAfricanUnity = lazy(() => import('./pages/publications/articles/PanAfricanUnity'));
const AfricanEconomicEcosystem = lazy(() => import('./pages/publications/articles/AfricanEconomicEcosystem'));
const ColonialBoundaries = lazy(() => import('./pages/publications/articles/ColonialBoundaries'));
const AfricanSelfReliance = lazy(() => import('./pages/publications/articles/AfricanSelfReliance'));
const HealingHistoricalDivides = lazy(() => import('./pages/publications/articles/HealingHistoricalDivides'));
const About = lazy(() => import('./pages/about/About'));
const MembershipPolicy = lazy(() => import('./pages/membershipPolicy/MembershipPolicy'));
const MembershipAgreement = lazy(() => import('./pages/membershipAgreement/MembershipAgreement'));
const Leadership = lazy(() => import('./pages/leadership/Leadership'));
const Donation = lazy(() => import('./pages/donation/Donation'));
const DonationFunds = lazy(() => import('./pages/donation/DonationFunds'));
const Events = lazy(() => import('./pages/events/Events'));
const EventDetail = lazy(() => import('./pages/events/EventDetail'));
const MalawiSummit = lazy(() => import('./pages/events/MalawiSummit'));
const CreateEvent = lazy(() => import('./pages/events/CreateEvent'));
const EventsHelpSupport = lazy(() => import('./pages/events/EventsHelpSupport'));
const EventsTickets = lazy(() => import('./pages/events/EventsTickets'));
const TicketsForm = lazy(() => import('./pages/events/TicketsForm'));
const Register = lazy(() => import('./pages/auth/Register'));
const Login = lazy(() => import('./pages/auth/Login'));
const ForgottenPassword = lazy(() => import('./pages/auth/ForgottenPassword'));
const VerifyEmail = lazy(() => import('./pages/auth/VerifyEmail'));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));
const Dashboard = lazy(() => import('./pages/UserAdminPages/common/Dashboard'));
const MemberVerification = lazy(() => import('./pages/UserAdminPages/common/MemberVerification'));
const EmergencyContact = lazy(() => import('./pages/UserAdminPages/common/EmergencyContact'));
const Notification = lazy(() => import('./pages/UserAdminPages/common/Notification'));
const Support = lazy(() => import('./pages/UserAdminPages/common/Support'));
const MemberApplication = lazy(() => import('./pages/UserAdminPages/admin/MemberApplication'));
const MyProfile = lazy(() => import('./pages/UserAdminPages/common/MyProfile'));
const UPAMCalender = lazy(() => import('./pages/UserAdminPages/common/UPAMCalender'));
const AllMembers = lazy(() => import('./pages/UserAdminPages/admin/AllMembers'));
const MemberDetail = lazy(() => import('./pages/UserAdminPages/admin/detailPages/MemberDetail'));
const MemberProfile = lazy(() => import('./pages/UserAdminPages/admin/detailPages/MemberProfile'));
const Chapters = lazy(() => import('./pages/UserAdminPages/admin/chapters/Chapters'));
const ChapterDetail = lazy(() => import('./pages/UserAdminPages/admin/detailPages/ChapterDetail'));
const PublicChapters = lazy(() => import('./pages/chapters/Chapters'));
const NotFound = lazy(() => import('./pages/NotFound'));
const MembershipPayment = lazy(() => import('./pages/UserAdminPages/common/MembershipPayment'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const PrivacyDataPolicy = lazy(() => import('./pages/legal/PrivacyDataPolicy'));
const Cookies = lazy(() => import('./pages/legal/Cookies'));
const SearchMembers = lazy(() => import('./pages/search/SearchMembers'));
const AllTransactionsTable = lazy(() => import('./pages/UserAdminPages/admin/AllTransactionsTable'));
const MyTransactions = lazy(() => import('./pages/UserAdminPages/common/MyTransactions'));
const Settings = lazy(() => import('./pages/UserAdminPages/admin/settings/Settings'));
const Dues = lazy(() => import('./pages/UserAdminPages/admin/Dues'));
const MyDues = lazy(() => import('./pages/UserAdminPages/common/MyDues'));

// Loading Fallback Component
const RouteLoader = () => (
  <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex items-center justify-center flex-col gap-4">
    <div className="relative">
      <Loader2 size={48} className="text-[#EB010C] animate-spin" />
      <div className="absolute inset-0 blur-xl bg-[#EB010C]/20 rounded-full animate-pulse" />
    </div>
    <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] animate-pulse">
      Initializing...
    </p>
  </div>
);

const App = () => {
  return (
    <div>
      <AutoRecovery />
      <Suspense fallback={<RouteLoader />}>
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
              <Route path="donation" element={<Donation />} />
              <Route path="donation/funds" element={<Navigate to="/donation" replace />} />
              <Route path="leadership" element={<Leadership />} />
              <Route path="events">
                <Route index element={<Events />} />
                <Route path="create" element={<CreateEvent />} />
                <Route path="help" element={<EventsHelpSupport />} />
                <Route path="tickets">
                  <Route index element={<EventsTickets />} />
                  <Route path="form" element={<TicketsForm />} />
                </Route>
                <Route path="global-african-renaissance-summit-2026" element={<MalawiSummit />} />
                <Route path=":slug" element={<EventDetail />} />
              </Route>

              <Route path="publications">
                <Route index element={<Publications />} />
                <Route path='panafrican-unity' element={<PanAfricanUnity />} />
                <Route path="digital-literacy" element={<DigitalLiteracy />} />
                <Route path="african-economic-ecosystem" element={<AfricanEconomicEcosystem />} />
                <Route path="colonial-boundaries" element={<ColonialBoundaries />} />
                <Route path="african-self-reliance" element={<AfricanSelfReliance />} />
                <Route path="healing-historical-divides" element={<HealingHistoricalDivides />} />
              </Route>

              {/* Auth Routes */}
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot-password" element={<ForgottenPassword />} />
              <Route path="verify-email" element={<VerifyEmail />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="platforms" element={<Platform />} />

              {/* Redirects for nav parent paths */}
              <Route path="chapters" element={<PublicChapters />} />
              <Route path="resources" element={<Navigate to="/publications" replace />} />
              <Route path="membership" element={<Navigate to="/membership-policy" replace />} />

              {/* Legal & Search */}
              <Route path="terms" element={<TermsOfService />} />
              <Route path="privacy" element={<PrivacyDataPolicy />} />
              <Route path="cookies" element={<Cookies />} />
              <Route path="search" element={<SearchMembers />} />

              {/* Protected Routes placeholder */}
              <Route element={<RequireAuth />} />

            </Route>

            {/* Admin Routes */}
            <Route element={<RequireAuth allowedRoles={['admin', "manager"]} />}>
              <Route element={<RoleRedirectGuard />}>
                <Route element={<ProfileCompletionGuard />}>
                  <Route path="/admin" element={<AdminLayoutContext />}>
                    <Route index element={<Dashboard />} />
                    <Route path='member-verification' element={<MemberVerification />} />
                    <Route path='membership-payment' element={<MembershipPayment />} />
                    <Route path='emergency-contact' element={<EmergencyContact />} />
                    <Route path='notification' element={<Notification />} />
                    <Route path='support' element={<Support />} />
                    <Route path='all-members'>
                      <Route index element={<AllMembers />} />
                      <Route path=":id" element={<MemberProfile />} />
                    </Route>
                    <Route path='all-transactions' element={<AllTransactionsTable />} />
                    <Route path='my-transactions' element={<MyTransactions />} />
                    <Route path='my-dues' element={<MyDues />} />
                    <Route path='members-application'>
                      <Route index element={<MemberApplication />} />
                      <Route path=":id" element={<MemberDetail />} />
                    </Route>
                    <Route path='chapters'>
                      <Route index element={<Chapters />} />
                      <Route path=":id" element={<ChapterDetail />} />
                    </Route>
                    <Route path='dues' element={<Dues />} />
                    <Route path='my-profile' element={<MyProfile />} />
                    <Route path='calendar' element={<UPAMCalender />} />
                    <Route path='settings' element={<Settings />} />
                  </Route>
                </Route>
              </Route>
            </Route>

            {/* User Routes */}
            <Route element={<RequireAuth allowedRoles={['user', "admin", "manager"]} />}>
              <Route element={<RoleRedirectGuard />}>
                <Route element={<ProfileCompletionGuard />}>
                  <Route path="/user" element={<UserLayoutContext />}>
                    <Route index element={<Dashboard />} />
                    <Route path='member-verification' element={<MemberVerification />} />
                    <Route path='calendar' element={<UPAMCalender />} />
                    <Route path='membership-payment' element={<MembershipPayment />} />
                    <Route path='emergency-contact' element={<EmergencyContact />} />
                    <Route path='notification' element={<Notification />} />
                    <Route path='support' element={<Support />} />
                    <Route path='my-transactions' element={<MyTransactions />} />
                    <Route path='my-dues' element={<MyDues />} />
                    <Route path='my-profile' element={<MyProfile />} />
                  </Route>
                </Route>
              </Route>
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
