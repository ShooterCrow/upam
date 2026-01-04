import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

// Only disable devtools in production
if (process.env.NODE_ENV === 'production') disableReactDevTools()

// Create a data router
const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
)
