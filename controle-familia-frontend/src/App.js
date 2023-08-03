import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "@mui/icons-material";
import SidebarGlobal from "./scenes/global/SidebarGlobal";

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
						<Route path="/" element={<Dashboard/>} />
					</Routes>
				</main>
			</div>
		</ThemeProvider>
	</ColorModeContext.Provider>);
}

export default App;
