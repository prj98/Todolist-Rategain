import React from "react";
import DataItem from "./DataItem";

function DataList(props) {
  return (
    <ol className="list-task">
      {props.taskList
        .filter((task) => {
          if (!task.completed) {
            return true;
          }
          return false;
        })
        .map((task) => {
          return (
            <DataItem
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

export default DataList;
