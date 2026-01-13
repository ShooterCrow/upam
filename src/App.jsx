import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import GetInvolve from './pages/getInvolve/getInvolve'
import Platform from './pages/platform/Platform'
import Header from './component/layout/Header'
import Publications from './pages/publications/Publications'
import Research from './pages/publications/Research'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Gallery */}
          <Route path="gallery" element={<Gallery />} />
          {/* Get Involved */}
          <Route path="get-involved" element={<GetInvolve />} />
          <Route path="publications" element={<Publications />} />
          <Route path="research" element={<Research />} />
          {/* Platform */}
          <Route path="platforms" element={<Platform />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App