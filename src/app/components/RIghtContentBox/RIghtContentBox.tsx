'use client';

import Topbar from '@/app/components/topbar/Topbar'
import Mainhome from '@/app/pages/Mainhome'

const RightContentBox = () => {
    return (
        <div className='flex flex-col w-full'>
            <Topbar/>
            <Mainhome />
        </div>
    );
}
 
export default RightContentBox;