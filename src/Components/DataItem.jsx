import React from "react";

function DataItem(props) {
  return (
    <li
      className={
        props.theme === "light" ? "list-item" : "list-item list-item-dark"
      }
    >
      <div className="container-list-item">
        <span
          className={
            props.theme === "light" ? "task-name" : "task-name task-name-dark"
          }
        >
          {props.task.title}
        </span>
        <div>
          <button
            className={
              props.theme === "light"
                ? "btn btn-done"
                : "btn btn-done btn-dark btn-done-dark"
            }
            onClick={() => {
              props.setTaskList(
                props.taskList.map((task) => {
                  if (task.id === props.task.id) {
                    const editedTask = { ...task };
                    editedTask.completed = true;
                    return editedTask;
                  } else {
                    return task;
                  }
                })
              );
            }}
          >
            Done
          </button>
          <button
            className={
              props.theme === "light"
                ? "btn btn-delete"
                : "btn btn-delete btn-dark btn-delete-dark"
            }
            onClick={() => {
              props.setTaskList(
                props.taskList.filter((task) => {
                  if (task.id === props.task.id) {
                    return false;
                  }
                  return true;
                })
              );
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default DataItem;
