'use client';

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

import {AiOutlinePlus}  from 'react-icons/ai'

const useNewtask = () => {
    const pathname = usePathname();

    const route = useMemo(() => [
        {
            label: 'New task',
            href: '/newtask',
            icon: AiOutlinePlus,
            active: pathname === '/newtask'
        }
    ], [pathname])
    
    return route;
}
 
export default useNewtask;