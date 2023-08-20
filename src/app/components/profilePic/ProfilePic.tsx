'use client';

import Image from "next/image";
import Avatar from '@/app/components/avatar/Avatar'
import { useState, useCallback } from "react";
import Menuitem from "./Menuitem";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";

interface ProfileProps {
    currentUser?: User | null;
}

const ProfilePic: React.FC<ProfileProps>= ({
    currentUser
}) => {
    console.log({ currentUser })

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    return (  
        <div className="profile-section">
            
            <div onClick={toggleOpen} className="rounded-full cursor-pointer flex items-center justify-center" style={{border:"solid 1px #D2D2D2", height:"45px", width:"45px"}}>
                <Avatar />
            </div>
            

            <div>
                <span>Hello, Collins</span>
            </div>

            {isOpen && (
                <div className="
                    absolute
                    rounded-xl
                    shadow-md
                    w-[40vw]
                    md:w-3/4
                    bg-white
                    overflow-hidden
                    right-15
                    top-12
                    text-sm
                ">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                            <Menuitem 
                                onClick={() => {}}
                                label="Settings"
                            />

                            <Menuitem 
                                onClick={() => signOut()}
                                label="Log Out"
                            />
                        </>
                        ):(
                            <>
                                <Menuitem 
                                    onClick={() => {}}
                                    label="Login"
                                />

                                <Menuitem 
                                    onClick={() => {}}
                                    label="Signup"
                                />
                            </>
                        )}
                        
                    </div>
                </div>

            )}
        </div>
        
    );
}
 
export default ProfilePic;