import React from 'react';
import NavBar from "./NavBar.jsx";
import MenuBar from "./MenuBar.jsx";

function GlobalTemplate({Item}) {
    return (
        <div className="p-0 m-0">
            <NavBar/>
            <div className="grid mr-1">
                <div className="col-fixed" style={{width: "250px"}}>
                    <MenuBar/>
                </div>
                <div className="col justify-content-center">
                    <Item/>
                </div>
            </div>
        </div>
    );
}

export default GlobalTemplate;