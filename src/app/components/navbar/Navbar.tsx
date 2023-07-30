import Container from "../Container";
import Logo from "./Logo";
import Image from "next/image";
import Menu_Item from "./MenuItem";
import FullLogo from "./FullLogo";
import Logout from "./LogoutButton";

const Navbar = () => {
    return (
        <div className="navbar-div">
            {/* This is the container for the taskee logo */}
            <Container>
                <FullLogo />
            </Container>

            {/* <Menu_Item /> */}
            <Menu_Item/>

            {/* For the logout button.. */}
            <Logout />
        </div>
    );
}

export default Navbar