import { ITodo } from "../type/todo";

interface Props {
  list: ITodo[];
  toggleDone?: (id: ITodo["id"]) => void;
  updateItem?: (id: ITodo["id"]) => void;
  deleteItem?: (id: ITodo["id"]) => void;
}

function TodoList({ list, toggleDone, deleteItem, updateItem }: Props) {
  function getDoneClassName(done: boolean) {
    let defaultStyle = [
      "fa-solid",
      "fa-check",
      "text-sm",
      "transition-all",
      "duration-200",
    ];
    if (done) {
      defaultStyle.push("opacity-100", "scale-100");
    } else {
      defaultStyle.push("opacity-0", "scale-0");
    }
    return defaultStyle.join(" ");
  }

  return (
    <>
      <div>
        {!list?.length ? (
          <p className="text-center text-xl pt-5 text-gray-500">
            You have no tasks
          </p>
        ) : (
          <ul>
            {list.map((i) => (
              <li
                key={i.id}
                className="bg-slate-800 group flex gap-2 pl-5 pr-3 py-3 rounded-md mb-2 transition-all duration-200 border border-transparent hover:border-primary"
              >
                <div className="flex items-center gap-3 w-full">
                  <button
                    onClick={() => toggleDone?.(i.id)}
                    className="w-5 h-5 border border-gray-500 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:border-white"
                  >
                    <i className={getDoneClassName(i.done)}></i>
                  </button>
                  <p>{i.done ? <del>{i.text}</del> : i.text}</p>
                </div>
                <div className="flex items-center gap-4 transition-all duration-200 scale-0 group-hover:scale-100">
                  <button
                    onClick={() => updateItem?.(i.id)}
                    className="text-sky-500 transition-all duration-200 hover:text-sky-600 active:scale-75 active:duration-75 outline-none"
                  >
                    <i className="fa-solid fa-pencil text-xl"></i>
                  </button>
                  <button
                    onClick={() => deleteItem?.(i.id)}
                    className="text-red-500 transition-all duration-200 hover:text-red-600 active:scale-75 active:duration-75 outline-none"
                  >
                    <i className="fa-solid fa-trash-can text-xl"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default TodoList;
