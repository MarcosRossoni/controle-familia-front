import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";

const NavBar = () => {
    return (
        <div className="flex w-full">
            <nav className="flex align-items-center justify-content-between py-2 px-2 w-full gap-1 bg-primary">
                <Link to={`/`}>
                    <i className="pi pi-home" style={{fontSize: '2rem', color: 'white'}}></i>
                </Link>
                <div className="flex">
                    <Avatar icon="pi pi-user" className="mr-2 surface-ground text-black-alpha-90" size="large" shape="circle" />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;