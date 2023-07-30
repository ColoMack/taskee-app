'Use-client'

import Image from "next/image";

const Menu_Item = () => {
    return ( 
        <div>
            {/* list of the menu options.. */}
            <ul className="sidebar-items">
                <div className="outer-div-1">
                    <a href="/" className="sidebar-link">
                        <div className="sidebar-item-container">
                            <span className="sidebar-icon">
                                <Image src="/images/dashboardIcon.svg" height={36} width={36} alt="Dashboard" />  
                            </span>
                            <span className="sidebar-name">Dashboard</span>
                        </div>
                    </a>
                    <a href="/" className="sidebar-link">
                        <div className="sidebar-item-container">
                            <span className="sidebar-icon">
                                <Image src="/images/taskList.svg" height={36} width={36} alt="Task List" />  
                            </span>
                            <span className="sidebar-name">Task List</span>
                        </div>
                    </a>
                    <a href="/" className="sidebar-link">
                        <div className="sidebar-item-container third-child">
                            <span className="sidebar-icon">
                                <Image src="/images/notificationIcon.svg" height={28} width={23} alt="Notifications" />  
                            </span>
                            <span className="sidebar-name">Notifications</span>
                        </div>
                    </a>
                </div>
                <div className="outer-div-2">
                    <a href="/" className="sidebar-link">
                        <div className="sidebar-item-container">
                            <span className="sidebar-icon">
                                <Image src="/images/settingsIcon.svg" height={33} width={31} alt="Settings" />  
                            </span>
                            <span className="sidebar-name">Settings</span>
                        </div>
                    </a>
                    <a href="/" className="sidebar-link-button">
                        <div className="sidebar-button">
                            <span className="sidebar-button-icon">
                                <Image src="/images/createTask.svg" height={25} width={25} alt="New-task" />  
                            </span>
                            <span className="sidebar-button-name">New Task</span>
                        </div>
                    </a>
                </div>  
            </ul>
        </div>    
    );
}
 
export default Menu_Item;