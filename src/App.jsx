import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import GetInvolve from './pages/getInvolve/getInvolve'
import Header from './component/layout/Header'

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
        </Route>
      </Routes>
    </div>
  )
}

export default App