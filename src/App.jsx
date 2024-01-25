import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import {PrimeReactProvider} from "primereact/api";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import MenuBar from "./components/MenuBar.jsx";

function App() {

  return (
      <PrimeReactProvider>
          <div className="p-0 m-0">
              <NavBar/>
              <div className="grid h-full">
                  <div className="col-fixed" style={{width:"250px"}}>
                      <MenuBar/>
                  </div>
                  <div className="col justify-content-center">
                      <Outlet/>
                  </div>
              </div>
          </div>
      </PrimeReactProvider>
  )
}

export default App
