'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

const Logo = () => {
    const router = useRouter();
    return ( 
        <>
            {/* The logo image */}
            <Image
                className="logo-image" 
                alt = "Logo"
                height="61"
                width= "61"
                src="/images/taskee_logo.svg"
            />
        </>

     );
}
 
export default Logo;