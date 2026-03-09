import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { siteContent } from './data/siteContent'
import './index.css'

document.title = siteContent.meta.title
const metaDescription = document.querySelector('meta[name="description"]')
if (metaDescription) {
  metaDescription.setAttribute('content', siteContent.meta.description)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
