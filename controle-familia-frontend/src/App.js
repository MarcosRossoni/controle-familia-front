import Topbar from "./scenes/global/Topbar";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import SidebarGlobal from "./scenes/global/SidebarGlobal";
import Dashboard from "./scenes/dashboard/Index";
import Equipe from "./scenes/equipe/index";

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
					</Routes>
				</main>
			</div>
		</ThemeProvider>
	</ColorModeContext.Provider>);
}

export default App;
