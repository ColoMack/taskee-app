'use client';

import Image from "next/image";

const SearchBar = () => {
    return (
        <div className="
        border 
        rounded-full 
        py-2 
        px-6 
        flex 
        flex-row
        items-center
        gap-2
        
        ">
            <div>
                <Image src="/images/searchIcon.svg" height={30} width={30} alt="icon"/>
            </div>
            <div className="w-80">
                <input style={{outline:"none"}} className="w-full" placeholder="Search" />
            </div>

        </div>

        
    );
}
 
export default SearchBar;