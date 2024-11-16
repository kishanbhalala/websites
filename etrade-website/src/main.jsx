import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Auth0Provider
      domain="dev-nsvn1ka0elgajfc2.us.auth0.com"
      clientId="7SgfpYgtgogb5wLf5Tv2mAzQRGvkS2He"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>,
)
