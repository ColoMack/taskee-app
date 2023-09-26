'use client';

import Hometasks from "./Hometasks";

const Mainhome = () => {
    return (
        <div style={{background:"#F6F6F6", padding:"2.5rem 2.38rem", }} className=" h-full flex flex-col">
            <div style={{marginBottom:"2rem", marginLeft:"1.5rem"}} className="flex flex-col">
                <span style={{fontSize:"2.5rem", color:"#000"}}>Home</span>
                <span style={{color:"#9E9E9E", fontSize:"0.75rem"}}>let's organize your daily tasks.</span>
            </div>
            <div className="flex flex-col" style={{border:"solid 1px red", overflow:"scroll", height:"23.8rem"}}>
                <Hometasks />
            </div>
        </div>
    );
}
 
export default Mainhome;