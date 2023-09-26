'use client';

import useRoutes from "@/app/hooks/useRoutes";
import { User } from "@prisma/client";
import { useState } from "react";
import SidebarItem from "./SidebarItem";


interface SidebarProps {
    
}



const Sidebar: React.FC<SidebarProps> = ({
    
}) => {

    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="sidebar-items">
                <nav>
                    <ul role="list">
                        {routes.map((item?) => (
                            <SidebarItem 
                                key={item.label}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                                active={item.active}
                                // onClick={item.onClick}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
 
export default Sidebar;