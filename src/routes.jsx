import Login from "./elementrotes/Login.jsx";
import InitialPage from "./InitialPage.jsx";

export default function routes() {
    return{
            element: <InitialPage/>,
            children: [
                {path: "/login", element: <Login/>},
                {path: "*", element: <div>Error</div>},
            ],
        }
}