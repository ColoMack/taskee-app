'Use-client'

import Image from "next/image";

const Logout = () => {
    return (
        <>
            <div className="sidebar-items logout-cont">
                <a href="/" className="sidebar-link">
                    <div className="sidebar-item-container">
                        <span className="sidebar-icon">
                            <Image src="/images/logoutIcon.svg" height={35} width={35} alt="Logout" />  
                        </span>
                        <span className="sidebar-name">Logout</span>
                    </div>
                </a>
            </div>
        </>
    );
}
 
export default Logout;