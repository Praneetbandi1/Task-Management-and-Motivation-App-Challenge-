import { tasks } from "./tasks.js";
import { useState } from "react";


export default function TaskList() {
    let [taskList] = useState(tasks); 
    let [index, setIndex] = useState(0);
    let currentTask = taskList[index]; 
        
    function handleClick() {
        if (index < tasks.length - 1) { 
            setIndex(index + 1);
        }
        else {
            setIndex(0) 
        }
    }
    return (

        <>
            <div>
                <u>Current Task:</u> {" "}
                {currentTask.name} <br /><br />{'Status: '} 
                {currentTask.isCompleted ? 'Completed ✅' : 'Pending...'}
                <br /><br />
            </div>
            <h4>
                <button onClick={handleClick}> {/* Displays button to change index*/}
                    Next Task
                </button><br />
                ({index + 1} of {tasks.length})
            </h4>

            
        </>
    )
}