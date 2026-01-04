import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/layout/Layout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App