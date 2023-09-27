import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

import {FiSettings}  from 'react-icons/fi'

const useRoutes2 = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Settings',
            href: '/settings',
            icon: FiSettings,
            active: pathname === '/settings'
        }
    ], [pathname])
    
    return routes;
}
 
export default useRoutes2;