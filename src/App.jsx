import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
      <div>
          <NavBar/>
          <div className="container">
              <Outlet/>
          </div>
      </div>
  )
}

export default App
