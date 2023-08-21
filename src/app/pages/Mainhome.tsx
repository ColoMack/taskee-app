'use client';

import Hometasks from "./sections/Hometasks";

const Mainhome = () => {
    return (
        <div className="outer-task-scroll-div">
            <div style={{marginBottom:"2rem", marginLeft:"1.5rem"}} className="flex flex-col">
                <span style={{fontSize:"2.5rem", color:"#000"}}>Home</span>
                <span style={{color:"#9E9E9E", fontSize:"0.75rem"}}>let's organize your daily tasks.</span>
            </div>
            <div>
                <Hometasks />
            </div>
        </div>
    );
}
 
export default Mainhome;