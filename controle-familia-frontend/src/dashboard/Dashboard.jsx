import * as React from "react";
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import MenuBar from "./MenuBar";
import MenuDrawer from "./MenuDrawer";

const Dashboard = () => {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
        setOpen(open);
    }
    const defaultTheme = createTheme();
    const drawerWidth = 240
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <MenuBar toggleDrawer={toggleDrawer} open={open} drawerWidth={drawerWidth}/>
                <MenuDrawer toggleDrawer={toggleDrawer} open={open} drawerWidth={drawerWidth}/>
            </Box>
        </ThemeProvider>
    )
}

export default Dashboard
