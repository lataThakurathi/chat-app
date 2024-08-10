import { GoHomeFill } from "react-icons/go";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }>
                        <GoHomeFill />
                    </NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink
                        to="/chat-rooms"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }>
                        <HiChatBubbleOvalLeftEllipsis />
                    </NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }>
                        <IoSettingsSharp />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
