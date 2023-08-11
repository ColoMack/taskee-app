'use client';

import Image from "next/image";

const Avatar = () => {
    return (
        <div>
            <Image
                src="/images/placeholder.svg"
                className=""
                height={25}
                width={25}
                alt="avatar"
                
            />
        </div>
    );
}
 
export default Avatar;