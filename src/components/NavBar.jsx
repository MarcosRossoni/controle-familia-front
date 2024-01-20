import React from 'react';
import {Link} from "react-router-dom";
import "./NavBar.css"
import 'primeicons/primeicons.css';
import {Avatar} from "primereact/avatar";
import {Badge} from "primereact/badge";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to={`/`}>
                    <i className="pi pi-home" style={{fontSize: '2rem', color: "white"}}></i>
                </Link>
                <div className="flex-auto">
                    <Avatar icon="pi pi-user" className="p-overlay-badge" style={{backgroundColor: '#9c27b0', color: '#ffffff'}} size="xlarge">
                        <Badge value="4"/>
                    </Avatar>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;