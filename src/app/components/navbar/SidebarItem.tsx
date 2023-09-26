import clsx from "clsx";
import Link from "next/link";


interface SidebarItemProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    icon: Icon,
    href,
    active,
    onClick
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
                    px-4
                    text-gray-400
                    
                    hover:bg-gray-100
                    `,
                    active && 'bg-[#EEF6FE] text-[#7AA5D2] hover:bg-[#EEF6FE]'
                )} 
            >
                <Icon className="h-7 w-7 shrink-0" aria-hidden="true"/>

                <span className="text-lg @apply sidebar-name">{label}</span>
                
            </Link>
        </li>
    );
}
 
export default SidebarItem;