import Login from "./elementrotes/Login.jsx";
import App from "./App.jsx";

export default function routes() {
    return{
            element: <App/>,
            children: [
                {path: "/login", element: <Login/>},
                {path: "/signup", element: <h1>Cadastro</h1>},
                {path: "/*", element: <div>Error</div>},
            ],
        }
}