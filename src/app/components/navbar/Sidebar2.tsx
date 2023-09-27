'use client';

import useRoutes2 from "@/app/hooks/useRoutes2";
import SidebarItem2 from "./SidebarItem2";
import useNewtask from "@/app/hooks/useNewtask";
import NewtaskBtn from "./NewtaskBtn";

const Sidebar2 = () => {

    const routes = useRoutes2();

    // this is for the new task button..
    const route = useNewtask();

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

                        {route.map((item) => (
                            <NewtaskBtn
                                key={item.label}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                                active={item.active}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
 
export default Sidebar2;