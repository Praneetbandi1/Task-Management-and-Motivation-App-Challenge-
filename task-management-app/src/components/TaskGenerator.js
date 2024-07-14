//U46368100
import { tasks } from "./tasks.js";
import { useState } from "react";
import { FancyText } from "./FancyText.js";
import { messages } from "./Messages.js";
export default function TaskList() {
    let [taskList, setCurrentTaskList] = useState(tasks); 
    let [index, setIndex] = useState(0);
    let currentTask = taskList[index];
    let currentMessage = messages[index]; 
        
    function handleClick() {
        if (index < tasks.length - 1) { 
            setIndex(index + 1);
        }
        else {
            setIndex(0) 
        }
    }

    function handleComplete(taskId) {
        const newTask = taskList.map(functionTask => {
            if (functionTask.id === taskId) { 
                return {
                    ...functionTask,
                    isCompleted: true, //...spread operator, to create a new object that copies all the properties
                                       //from the origina functionTask object and then setting isCompleted with the true value 
                }
            } else { 
                return functionTask;
            }
        });
        setCurrentTaskList(newTask);
    }



    return (

        <>
            <div>
                <b>Current Task:</b> {" "}
                {currentTask.name} <br /><br />
                <b>Status: </b> 
                {currentTask.isCompleted ? 'Completed ✅' : 'Pending...'}
                {" "}{/* Displays status of current task, depending on if it is completed or not*/}
                {!currentTask.isCompleted && <button onClick={() => { 
                    handleComplete(currentTask.id) }}>Complete Task</button>}{/* Displays button to complete task if task is not completed*/}
                <br /><br /><br /><br />
                <b><FancyText text={currentMessage} /></b> {/* Displays message depending on index*/}
            </div>
            <h4>
                <button onClick={
                    handleClick}> {/* Displays button to change index*/}
                    Next Task
                </button><br />
                ({index + 1} of {tasks.length})
            </h4>

            
        </>
    )
}