import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Outlet} from "react-router-dom";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css"
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css'
import {PrimeReactProvider} from "primereact/api";
import MenuBar from "./components/MenuBar.jsx";
import "/node_modules/primeflex/primeflex.css"


function App() {

    return (
        <PrimeReactProvider>
            <div>
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
