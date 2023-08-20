'use client';

import ProfilePic from "../profilePic/ProfilePic";
import SearchBar from "../searchBar/SearchBar";
import { User } from "@prisma/client";
interface TopbarProps {
    currentUser?: User | null
}


const Topbar: React.FC<TopbarProps> = ({
    currentUser
}) => {
    
    return (
        <>
            <div className="flex flex-row pt-5 pb-6 px-9 border relative z-0 items-center">
                <SearchBar />
                <ProfilePic currentUser={currentUser} />
                
            </div>
        </>
    );
}
 
export default Topbar;