import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProviderContext from './context/AuthProviderContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProviderContext>
      <App />
        </AuthProviderContext>
   
  </StrictMode>,
)
