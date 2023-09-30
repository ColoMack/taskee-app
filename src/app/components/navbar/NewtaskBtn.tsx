'use client';

import clsx from "clsx";
import Link from "next/link";

interface Newtaskprops {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const NewtaskBtn: React.FC<Newtaskprops> = ({
    label,
    icon: Icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <li onClick={handleClick} key={label}>
            <Link
                href={href}
                className={clsx(`
                    group
                    flex
                    items-center
                    justify-center
                    gap-x-2
                    rounded-md
                    py-3
                    px-5
                    text-[#7AA5D2]
                    mt-[3rem]
                    border-2
                    border-[#7AA5D2]
                `,
                active && 'bg-[#7AA5D2] text-white'
                )}
            >
                <Icon className='h-7 w-7 shrink-0' aria-hidden="true" />
                <span className='text-[18px] @apply sidebar-name'>{label}</span>
            </Link>
        </li>
    );
}
 
export default NewtaskBtn;
