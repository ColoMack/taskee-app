'use client'

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../Container";
import Logo from "./Logo";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import { toggleSidebarCollapse } from "@/app/actions/navbarAction";

const Navbar = () => {

    // conceptualizing the maximising and minimising of the sidebar..
    // const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(false);

    // using redux
    const isSidebarCollapsed = useSelector((state:any) => state.isSidebarCollapsed);
    const dispatch = useDispatch();


    const toggleSidebarCollapseHandler = () => {
        // setIsCollapsedSidebar(prev => !prev)

        dispatch(toggleSidebarCollapse());
    };

    return (
        <div className="navbar-div" data-collapse = {isSidebarCollapsed}>
            {/* This is the container for the taskee logo */}
            <div style={{ border:"none 1px", width: "100%",height:"fit-content", display:"flex" }}>
                <Container>
                    <div style={{margin:"1rem 0 0 1rem"}} className="logo-cont">
                        <Logo/>

                        {/* The logo text */}
                        <span className="logo-text">taksee</span>
                    </div>
                </Container>
            </div>

            <div style={{ width:"100%", display:"flex", justifyContent:"center", margin:"1rem 0 0 0" }}>
                <div className="horizontal-line"></div>
            </div>

            {/* The circle containing the chevron */}
            <div style={{zIndex:"1"}} className="chevron-cont" onClick={toggleSidebarCollapseHandler}>
                <Image src="/images/chevronLeft.svg" height={15} width={15} alt="Minimize-Menu" />
            </div>

            {/* <Menu_Item /> */}
            <div style={{ width:"100%"}}>

                <Sidebar />

                <div style={{ width:"100%", display:"flex", justifyContent:"center", margin:"1rem 0 0 0" }}>
                    <div className="horizontal-line"></div>
                </div>

                <Sidebar2 />

                {/* list of the menu options.. */}
                {/* <ul className="sidebar-items">
                    
                    <div>
                        <a href="" className="sidebar-link">
                            <div className="sidebar-item-container">
                                <span className="sidebar-icon">
                                    <Image src="/images/dashboardIcon.svg" height={36} width={36} alt="Dashboard" />  
                                </span>
                                <span className="sidebar-name">Dashboard</span>
                            </div>
                        </a>
                    </div>
                    
                    <div>
                        <a href="/" className="sidebar-link">
                            <div className="sidebar-item-container">
                                <span className="sidebar-icon">
                                    <Image src="/images/taskList.svg" height={36} width={36} alt="Task List" />  
                                </span>
                                <span className="sidebar-name">Task List</span>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="/" className="sidebar-link">
                            <div className="sidebar-item-container third-child">
                                <span className="sidebar-icon">
                                    <Image src="/images/notificationIcon.svg" height={28} width={23} alt="Notifications" />  
                                </span>
                                <span className="sidebar-name">Notifications</span>
                            </div>
                        </a>
                    </div>    
                </ul> */}
            </div>
            

            {/* <div style={{ width:"100%", display:"flex", justifyContent:"center", margin:"1rem 0 0 0" }}>
                <div className="horizontal-line"></div>
            </div> */}

            <div style={{ width:"100%"}}>
                <ul className="sidebar-items">
                    {/* For the logout button.. */}
                    <div style={{marginRight: "0rem"}} className="sidebar-items logout-cont">
                        <button onClick={() => signOut()} className="sidebar-link">
                            <div  className="sidebar-item-container">
                                <span className="sidebar-icon">
                                    <Image src="/images/logoutIcon.svg" height={35} width={35} alt="Logout" />  
                                </span>
                                <span className="sidebar-name">Logout</span>
                            </div>
                        </button>
                    </div>

                    {/* <div>
                        <a href="/" className="sidebar-link">
                            <div style={{margin:"0 0 0 20px"}} className="sidebar-item-container">
                                <span className="sidebar-icon">
                                    <Image src="/images/settingsIcon.svg" height={33} width={31} alt="Settings" />  
                                </span>
                                <span className="sidebar-name">Settings</span>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="/" className="sidebar-link-button">
                            <div className="sidebar-button">
                                <span className="sidebar-button-icon">
                                    <Image src="/images/createTask.svg" height={25} width={25} alt="New-task" />  
                                </span>
                                <span className="sidebar-button-name">New Task</span>
                            </div>
                        </a>
                    </div> */}
                    
                    
                </ul>
            </div>

        </div>
    );
}

export default Navbar