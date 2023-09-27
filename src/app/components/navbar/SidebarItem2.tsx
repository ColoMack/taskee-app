'use client';

import clsx from "clsx";
import Link from "next/link";

interface SidebarItemProps2 {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const SidebarItem2: React.FC<SidebarItemProps2> = ({
    
    label,
    icon: Icon,
    href,
    active,
    onClick,

}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    };

    return (
        <li onClick = {handleClick} key={label}>
            <Link
                href={href}
                className={clsx(`
                    
                    group
                    flex
                    items-center
                    gap-x-3
                    rounded-md
                    py-3
                    px-5
                    mb-2
                    text-[#7AA5D2]
                    `,
                    active && 'bg-[#EEF6FE]',
                    !active && 'text-gray-400 hover:bg-gray-50'
                )} 
            >
                <Icon className="h-6 w-6 shrink-0" aria-hidden="true"/>

                <span className='text-[16px] @apply sidebar-name'>{label}</span>
                
            </Link>

        </li>
    );
}
 
export default SidebarItem2;