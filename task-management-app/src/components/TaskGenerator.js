import { tasks } from "./tasks.js";
import { useState } from "react";


export default function TaskList() {
    let [taskList] = useState(tasks); 
    let [index] = useState(0);
    let currentTask = taskList[index]; 
         
    return (
        <>
            <div>
                <u>Current Task:</u> {" "}
                {currentTask.name} <br /><br />{'Status: '} 
                {currentTask.isCompleted ? 'Completed ✅' : 'Pending...'}
                <br /><br />
            </div>

            
        </>
    )
}