'use client';

import Topbar from "@/app/components/topbar/Topbar";
import NewtaskContent from "./NewtaskContent";

const NewtaskRightside = () => {
    return (
        <div className="flex flex-col w-screen">
            <Topbar />

            {/* rendering the content of the page */}
            <NewtaskContent />
        </div>
    );
}
 
export default NewtaskRightside;