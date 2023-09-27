'use client';

import useRoutes2 from "@/app/hooks/useRoutes2";
import SidebarItem2 from "./SidebarItem2";

const Sidebar2 = () => {

    const routes = useRoutes2();

    return (
        <>
            <div className="sidebar-items">
                <nav>
                    <ul role="list">
                        {routes.map((item) => (
                            <SidebarItem2
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
 
export default Sidebar2;