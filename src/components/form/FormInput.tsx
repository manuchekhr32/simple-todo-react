import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { ITodo } from "../../type/todo";

interface Props {
  updatable?: ITodo;
  onSubmit?: (val: string) => void;
  cancelUpdate?: () => void;
}

function FormInput({ onSubmit, updatable, cancelUpdate }: Props) {
  const [modelValue, setModelValue] = useState("");

  useEffect(() => {
    setModelValue(updatable ? updatable.text : "");
  }, [updatable]);

  function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (modelValue.length > 0) {
      onSubmit?.(modelValue);
      setModelValue("");
    }
  }

  return (
    <>
      <form onSubmit={submit}>
        <div className="flex items-center gap-3">
          <div className="w-full relative">
            <input
              value={modelValue}
              onChange={(e) => setModelValue(e.target.value)}
              type="text"
              required={true}
              placeholder="Create new task"
              className="bg-slate-800 w-full transition-all rounded-md px-3 py-2 duration-200 outline-none focus:ring ring-primary/50"
            />
            {updatable ? (
              <i
                onClick={() => cancelUpdate?.()}
                className="fa-solid fa-times text-2xl absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer"
              ></i>
            ) : null}
          </div>
          <Button type="submit">{updatable ? "Update" : "Create"}</Button>
        </div>
      </form>
    </>
  );
}

export default FormInput;
