import * as React from "react";
import {Divider, IconButton, List, styled, Toolbar} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import {ChevronLeftOutlined} from "@mui/icons-material";
import {mainListItems, secondaryListItems} from "./ListItems";

const MenuDrawer = ({toggleDrawer, open, drawerWidth}) => {

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            '& .MuiDrawer-paper': {
                position: 'relative',
                whiteSpace: 'nowrap',
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: theme.spacing(7),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(9),
                    },
                }),
            },
        }),
    );

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1]
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftOutlined/>
                </IconButton>
            </Toolbar>
            <Divider/>
            <List component="nav">
                {mainListItems}
                <Divider sx={{my: 1}}/>
                {secondaryListItems}
            </List>
        </Drawer>
    )
}

export default MenuDrawer