'use client';

import Taskdescription from "./Taskdescription";
import Taskinfo from "./Taskinfo";



const NewTaskList = () => {
    return (
        <div style={{boxShadow:'0px 0px 0px 0px black'}} className="
            border
            border-zinc-200
            py-[2rem]
            px-[1.5rem]
            rounded-[7px]
            bg-white
            flex
            flex-col
        ">
            <section>
                <Taskinfo />

                <hr className="border border-zinc-100 my-[2rem]" style={{}}></hr>

                <Taskdescription />

                <hr className="border border-zinc-100 my-[2rem]" style={{}}></hr>

                <div className="flex justify-center">
                    <button className="
                        border
                        border-zinc-300
                        py-[0.7rem]
                        px-[1rem]
                        rounded-md
                    " 
                    type="submit">Add Task</button>
                </div>
            </section>
        </div>
    );
}
 
export default NewTaskList;