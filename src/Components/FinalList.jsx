import React from "react";
import FinalItem from "./FinalItem";

function FinalList(props) {
  return (
    <ol className="list-task">
      {props.taskList
        .filter((task) => {
          if (task.completed) {
            return true;
          }
          return false;
        })
        .map((task) => {
          return (
            <FinalItem
              theme={props.theme}
              task={task}
              taskList={props.taskList}
              setTaskList={props.setTaskList}
            />
          );
        })}
    </ol>
  );
}

export default FinalList;
