import {Box, IconButton, InputBase, useTheme} from "@mui/material";
import {ColorModeContext, tokens} from "../../theme";
import {useContext} from "react";
import {
    DarkModeOutlined,
    LightModeOutlined,
    NotificationsOutlined,
    PersonOutlined,
    Search,
    SettingsOutlined
} from "@mui/icons-material";


const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    console.log(theme)
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                <IconButton type="button" sx={{ p: 1}}>
                    <Search />
                </IconButton>
            </Box>
            <Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined/>
                    ) : <LightModeOutlined/>}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined/>
                </IconButton>
                <IconButton>
                    <SettingsOutlined/>
                </IconButton>
                <IconButton>
                    <PersonOutlined/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;