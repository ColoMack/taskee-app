import DueTasks from "./DueTasks";
import ScheduledTasks from "./ScheduledTasks";

const Hometasks = () => {
    return (
        <>
            <div className="flex flex-col" style={{gap:"3.5rem"}}>
                <div style={{background:"#fff", borderRadius:"0.6875rem", padding:"2.12rem 0"}}>
                    <DueTasks/>
                </div>

                <div style={{background:"#fff", borderRadius:"0.6875rem", padding:"2.12rem 0"}}>
                    <ScheduledTasks/>
                </div>

                helloooo
            </div>
        </>
    );
}
 
export default Hometasks;