'use client';

import NewTaskList from "./NewTaskList";

const NewtaskContent = () => {
    return (
        <>
            <div className="outer-task-scroll-div">
                <header>
                    <div style={{marginBottom:"2rem", marginLeft:"1.5rem"}} className="flex flex-col">
                        <span style={{fontSize:"2rem", color:"#000"}}>Create a new task</span>
                        {/* <span style={{color:"#9E9E9E", fontSize:"0.75rem"}}>let's organize your daily tasks.</span> */}
                    </div>
                </header>

                <section>
                    <NewTaskList />
                </section>
            </div>
        </>
    );
}
 
export default NewtaskContent;