import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Menu, MenuItem, Sidebar} from "react-pro-sidebar"
import {tokens} from "../../theme";
import {useState} from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {Link} from "react-router-dom";

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100]
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}


const SidebarGlobal = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState("Dashboard")

    return (
        <Box
            sx={{
            "& .pro-sidebar-inner": {
                background: `#f90100 !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            }
        }}
        >
            <Sidebar collapsed={isCollapsed}>
                <Menu iconshape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-btween"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{m: "10px 0 0 0"}}
                                >
                                    Marcos Rossoni
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Administrador
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{m: "15px 0 5px 20px"}}
                    >
                        Data
                    </Typography>
                </Menu>

            </Sidebar>
        </Box>
    )
}

export default SidebarGlobal;