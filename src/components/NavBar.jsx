import React from 'react';
import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";
import {FaBars, FaHome} from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="flex w-full">
            <nav className="flex align-items-center justify-content-between py-2 px-2 w-full gap-1 bg-primary">
                <div className="flex flex-row flex-wrap align-items-center">
                    <Link to={`/`}>
                        <FaHome style={{fontSize: '2rem', color: 'white'}}/>
                    </Link>
                    <div className="align-content-center m-3">
                        <FaBars style={{fontSize: '1.5rem', color: 'white'}}/>
                    </div>
                </div>
                <div className="flex">
                    <Avatar icon="pi pi-user" className="mr-2 surface-ground text-black-alpha-90" size="large"
                            shape="circle"/>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;