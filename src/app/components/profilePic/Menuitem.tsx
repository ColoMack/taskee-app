'use client';

interface MenuitemProps {
    onClick: () => void;
    label: string;
}

const Menuitem: React.FC<MenuitemProps> = ({
    onClick,
    label
}) => {
    return (
        <div 
            onClick={onClick}
            className="
                px-4
                py-3
                text-gray-600
                hover:bg-neutral-100
                hover:text-black
                transition
                
            "
        >
            {label}
        </div>
    );
}
 
export default Menuitem;