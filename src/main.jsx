import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { GlobalErrorBoundary } from './component/common/GlobalErrorBoundary.jsx'

// Only disable devtools in production
if (process.env.NODE_ENV === 'production') disableReactDevTools()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <GlobalErrorBoundary>
            <App />
          </GlobalErrorBoundary>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </StrictMode>
)
