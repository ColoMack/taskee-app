'use client';

import Navbar from "../components/navbar/Navbar";

const settingsLayout = ({
    children
}: {
    children: React. ReactNode
}) => {
    return (
        <div className='flex flex-row'>
            <Navbar />
            {children}
        </div>
    );
}
 
export default settingsLayout;