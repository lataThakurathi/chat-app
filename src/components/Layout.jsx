import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./Container";

const Layout = () => {
    return (
        <Container className="main-container">
            <Navbar />
            {<Outlet />}
        </Container>
    );
};

export default Layout;
