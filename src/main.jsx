import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
// import { RouterProvider } from 'react-router-dom'
// import { Router } from './RoutesPath/Routes'
import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <RouterProvider router={Router} /> */}
    <App />
  </React.StrictMode>,
)
