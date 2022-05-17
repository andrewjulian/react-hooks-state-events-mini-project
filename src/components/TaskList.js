import React from "react";
import Task from "./Task";

function TaskList(taskData) {

  console.log("taskData as prop", {taskData})


  const taskDisplayList = taskData.map((task, index) => {
    return  
        <li key={index}>
          <Task text={task.text} category={task.category}/>
        </li> 
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */} 
      
      {taskDisplayList}

    </div>
  );
}

export default TaskList;
