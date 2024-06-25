import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {getToken} from "./services/auth/auth.js";
import privateRoutes from "./privateRoutes.jsx";
import routes from "./routes.jsx";

const router = createBrowserRouter([
    getToken() ? privateRoutes() : routes()
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
