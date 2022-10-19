import Logo from '../assets/image.jpg';
import { NavLink } from "react-router-dom";


function SideBar() {
    let activeStyle = {
        background: "var(--bright-navy-blue)",
    };

    return (
        <div className="side-bar d-flex flex-column justify-content-start align-items-center">
            <div className="logo-holder d-flex justify-content-center">
                <img src={Logo} className="logo" alt="logo" />
            </div>
            <nav className="nav-links w-100 mt-4">
                <ul className='d-flex flex-column list-unstyled w-100 p-2'>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/movie"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Movie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/music"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Music
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/book"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Book
                        </NavLink>
                    </li>


                </ul>
            </nav>
        </div>
    );
}

export default SideBar;
