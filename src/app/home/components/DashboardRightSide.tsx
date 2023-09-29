'use client';

import Topbar from '@/app/components/topbar/Topbar'
import DashboardContent from '@/app/home/components/DashboardContent';

const DashboardRightSide = () => {
    return (
        <div className='flex flex-col w-screen'>
            <Topbar/>

            {/* where the content of the page will be rendered */}
            <DashboardContent />
        </div>
    );
}
 
export default DashboardRightSide;