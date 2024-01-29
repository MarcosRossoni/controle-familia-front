import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./rotes/Home.jsx";
import ContaBancaria from "./rotes/ContaBancaria.jsx";
import Usuario from "./rotes/Usuario.jsx";

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/conta-bancaria",
                element: <ContaBancaria/>
            },
            {
                path: "/usuario",
                element: <Usuario/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
