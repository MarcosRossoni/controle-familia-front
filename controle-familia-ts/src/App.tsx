import {PrimeReactProvider} from "primereact/api";
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import NavBar from "./components/NavBar.tsx";
import MenuBar from "./components/MenuBar.tsx";
import {Outlet} from "react-router-dom";
import './App.css'

function App() {
  return (
    <PrimeReactProvider>
      <div className="surface-0 h-full">
          <NavBar/>
          <div className="flex flex-row">
              <MenuBar/>
              <div className="container">
                  <Outlet/>
              </div>
          </div>
      </div>
    </PrimeReactProvider>
  )
}

export default App
