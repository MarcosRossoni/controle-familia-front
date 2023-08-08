import Topbar from "./scenes/global/Topbar";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import SidebarGlobal from "./scenes/global/SidebarGlobal";
import Dashboard from "./scenes/dashboard/index";
import Equipe from "./scenes/equipe/index";
import Form from "./scenes/form";

function App() {
	const [theme, colorMode] = useMode()

	return (<ColorModeContext.Provider value={colorMode}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="app">
				<SidebarGlobal/>
				<main className="content">
					<Topbar />
					<Routes>
						<Route exact path="/" element={<Dashboard/>}/>
						<Route exact path="equipe" element={<Equipe/>}/>
						<Route exact path="cadastro" element={<Form/>}/>
					</Routes>
				</main>
			</div>
		</ThemeProvider>
	</ColorModeContext.Provider>);
}

export default App;
