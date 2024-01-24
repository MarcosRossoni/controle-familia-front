import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";
import {Badge} from "primereact/badge";

const NavBar = () => {
    return (
        <div className="flex w-full">
            <nav className="flex align-items-center justify-content-between py-2 px-2 w-full gap-1"
                 style={{backgroundColor: "#17191f"}}>
                <Link to={`/`}>
                    <i className="pi pi-home" style={{fontSize: '2rem', color: 'white'}}></i>
                </Link>
                <div className="flex">
                    <Avatar className="p-overlay-badge"
                            image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" className="bg-primary"/>
                    </Avatar>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;