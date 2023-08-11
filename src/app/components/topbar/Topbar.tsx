'use client';

import ProfilePic from "../profilePic/ProfilePic";
import SearchBar from "../searchBar/SearchBar";

const Topbar = () => {
    return (
        <>
            <div className="flex flex-row pt-5 pb-6 px-9 border relative z-0 items-center">
                <SearchBar />
                <ProfilePic />
                
            </div>
        </>
    );
}
 
export default Topbar;