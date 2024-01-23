import {PrimeReactProvider} from "primereact/api";
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

function App() {
  return (
    <PrimeReactProvider>
      <div className="m-8">Teste</div>
    </PrimeReactProvider>
  )
}

export default App
