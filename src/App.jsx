import React from 'react'
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


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Gallery */}
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          {/* Get Involved */}
          <Route path="get-involved" element={<GetInvolve />} />
          <Route path="publications" element={<Publications />} />

          <Route path="research" >
            <Route path='panafrican-unity' element={<PanAfricanUnity />} />
            <Route path="digital-literacy" element={<DigitalLiteracy />} />
          </Route>

          {/* Platform */}
          <Route path="platforms" element={<Platform />} />
          {/* Contact Us */}
          <Route path="contact-us" element={<ContactUs />} />
          {/* Partnership */}
          <Route path="partnership" element={<Partnership />} />
          {/* Volunteer */}
          <Route path="volunteer" element={<Volunteer />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
