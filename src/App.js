import { useState, useEffect } from "react";
import { v4 } from "uuid";
import "./styles.css";
import FinalList from "./Components/FinalList";
import DataList from "./Components/DataList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [display, setDisplay] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      const data = await response.json();
      setTaskList([...data]);
    }
    getData();
  }, []);
  return (
    <div className={theme === "light" ? "app" : "app app-dark"}>
      <select
        className={
          theme === "light"
            ? "theme-selector"
            : "theme-selector theme-selector-dark"
        }
        onChange={(e) => {
          setTheme(e.target.value);
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <h1
        className={
          theme === "light"
            ? "heading-primary"
            : "heading-primary heading-primary-dark"
        }
      >
        Todo List
      </h1>
      <div className="container-list">
        <div
          className={
            theme === "light"
              ? "container-list-todo"
              : "container-list-todo container-list-todo-dark"
          }
        >
          <h2
            className={
              theme === "light"
                ? "heading-secondary"
                : "heading-secondary heading-secondary-dark"
            }
          >
            Todo
          </h2>
          <DataList
            theme={theme}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <button
            className={
              theme === "light"
                ? "btn btn-item"
                : "btn btn-item btn-dark btn-item-dark"
            }
            style={display ? { display: "inline-block" } : { display: "none" }}
            onClick={() => {
              setDisplay(false);
            }}
          >
            + Item
          </button>
          <form
            className={
              theme === "light" ? "form-add" : "form-add form-add-dark"
            }
            style={!display ? { display: "inline-block" } : { display: "none" }}
          >
            <input
              className={
                theme === "light" ? "input-add" : "input-add input-add-dark"
              }
              type="text"
              placeholder="new task..."
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
            ></input>
            <button
              className={
                theme === "light"
                  ? "btn btn-add"
                  : "btn btn-add btn-dark btn-add-dark"
              }
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (newTask !== "") {
                  setTaskList([
                    ...taskList,
                    { userId: 1, id: v4(), title: newTask, completed: false },
                  ]);
                }
                setNewTask("");
                setDisplay(true);
              }}
            >
              Add
            </button>
          </form>
        </div>
        <div
          className={
            theme === "light"
              ? "container-list-completed"
              : "container-list-completed container-list-completed-dark"
          }
        >
          <h2
            className={
              theme === "light"
                ? "heading-secondary"
                : "heading-secondary heading-secondary-dark"
            }
          >
            Done
          </h2>
          <FinalList
            theme={theme}
            taskList={taskList}
            setTaskList={setTaskList}
         />
        </div>
      </div>
    </div>
  );
}

export default App;
