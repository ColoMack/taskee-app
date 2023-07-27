'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return ( 
        <Image
            className="image-container" 
            alt = "Logo"
            height="61"
            width= "61"
            src="/images/taskee_logo.svg"
        />
     );
}
 
export default Logo;