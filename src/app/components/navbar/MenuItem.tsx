'Use-client'

import Image from "next/image";

const Menu_Item = () => {
    return ( 
        <>
            
            <div className="outer-div">
                {/* list of the menu options.. */}
                <ul className="sidebar-items">
                    <a href="/" className="sidebar-link">
                        <span className="sidebar-icon">
                            <Image src="/images/dashboardIcon.svg" height={36} width={36} alt="Dashboard" />  
                        </span>
                        <span className="sidebar-name">Dashboard</span>
                    </a>
                    <a href="/" className="sidebar-link">
                        <span className="sidebar-icon">
                            <Image src="/images/dashboardIcon.svg" height={36} width={36} alt="Dashboard" />  
                        </span>
                        <span className="sidebar-name">Task List</span>
                    </a>
                    <a href="/" className="sidebar-link">
                        <span className="sidebar-icon">
                            <Image src="/images/dashboardIcon.svg" height={36} width={36} alt="Dashboard" />  
                        </span>
                        <span className="sidebar-name">Notifications</span>
                    </a>
                </ul>
            </div>
        </>
    );
}
 
export default Menu_Item;