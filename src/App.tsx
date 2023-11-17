import { useEffect, useState } from "react";
import "./App.css";
import FormInput from "./components/form/FormInput";
import { ITodo } from "./type/todo";
import { generateUUID } from "./utils/random";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const storedJSON = localStorage.getItem("todos");
    if (!storedJSON) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    const storedData = JSON.parse(storedJSON!);
    return storedData;
  });

  const [updatable, setUpdatable] = useState<ITodo | undefined>(undefined);

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch {
      alert("Error occured during saving todos to local storage");
    }
  }, [todos]);

  function handleSubmit(val: string) {
    if (updatable) {
      setTodos(
        todos.map((i) => ({
          ...i,
          text: i.id === updatable?.id ? val : i.text,
        }))
      );
      setUpdatable(undefined);
    } else {
      setTodos([...todos, { id: generateUUID(), text: val, done: false }]);
    }
  }

  function toggleDone(id: ITodo["id"]) {
    setTodos(
      todos.map((i) => ({
        ...i,
        done: id === i.id ? !i.done : i.done,
      }))
    );
  }

  function handleDelete(id: ITodo["id"]) {
    setTodos(
      todos.filter((item) => {
        if (item.id === id) {
          setUpdatable(undefined);
          return false;
        } else {
          return true;
        }
      })
    );
  }

  function setUpdateItem(id: ITodo["id"]) {
    setUpdatable(todos.find((i) => i.id === id));
  }

  return (
    <>
      <div className="container min-h-screen p-5">
        <h1 className="text-3xl font-bold">
          To Do app
          {todos?.length > 0 ? (
            <sup className="text-xs bg-red-500 p-0.5 rounded-full ml-2 text-center">
              {todos.length}
            </sup>
          ) : null}
        </h1>
        <div className="h-max sticky top-0 bg-slate-900 pb-5 pt-4">
          <FormInput
            onSubmit={handleSubmit}
            updatable={updatable}
            cancelUpdate={() => setUpdatable(undefined)}
          />
        </div>
        <TodoList
          list={todos}
          toggleDone={toggleDone}
          deleteItem={handleDelete}
          updateItem={setUpdateItem}
        />
      </div>
    </>
  );
}

export default App;
