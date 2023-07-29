import Container from "../Container";
import Logo from "./Logo";
import Image from "next/image";
import Menu_Item from "./MenuItem";
import FullLogo from "./FullLogo";

const Navbar = () => {
    return (
        <div className="navbar-div">
            {/* This is the container for the taskee logo */}
            <Container>
                <FullLogo />
            </Container>

            {/* <Menu_Item /> */}
            <Menu_Item/>
        </div>
    );
}

export default Navbar