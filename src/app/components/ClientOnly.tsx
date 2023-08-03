'use client';

import { useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {

    // This acts as a wrapper which ensures that the page while loading(the client side), a 'not-synced' error doesn't show up when data on the client-side isn't synced with data on server-side..
    // this error is called de-hydration..
    const[hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}
 
export default ClientOnly;