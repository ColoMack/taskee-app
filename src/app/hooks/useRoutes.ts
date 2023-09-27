import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

// Icons that will be used in the navigation sidebar..
import {LuLayoutDashboard}  from 'react-icons/lu'
import {AiOutlineUnorderedList}  from 'react-icons/ai'
import {IoMdNotificationsOutline}  from 'react-icons/io'

const useRoutes = () => {
    const pathname = usePathname();

    // this is for initializing the paths of the buttons in the sidebar..
    const routes = useMemo(() => [
        // an array of paths that the sidebar has..
        {
            label: 'Dashboard',
            href: '/home',
            icon: LuLayoutDashboard,
            active: pathname === '/home'
        },
        {
            label: 'Task list',
            href: '/tasklist',
            icon: AiOutlineUnorderedList,
            active: pathname === '/tasklist'
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: IoMdNotificationsOutline,
            active: pathname === '/notifications'
        }

    ], [pathname]);

    return routes
}
 
export default useRoutes;