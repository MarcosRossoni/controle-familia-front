import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./rotes/Home.tsx";
import ContaBancaria from "./components/ContaBancaria.tsx";

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
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
