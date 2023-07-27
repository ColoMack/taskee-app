import Container from "../Container";
import Logo from "./Logo";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar-div">
            {/* This is the container for the taskee logo */}
            <Container>
                <div className="logo-div">
                    <Logo />
                </div>
            </Container>

            {/* list of the menu options.. */}
            <ul className="sidebar-items">
                <a href="/" className="sidebar-link">
                    <span className="sidebar-icon">
                        <Image src="/images/dashboardIcon.svg" height={36} width={36} alt="Dashboard" />  
                    </span>
                    <span className="sidebar-name">Dashboard</span>
                </a>
            </ul>
        </div>
    );
}

export default Navbar