import React, { useContext, useState, useEffect, useRef } from "react";
import { useTodo } from "../context";

function TodoItem({todo}){

    const {updateTodo, deleteTodo, toggleTodo}= useTodo()
    const [isTodoEditable,setIsTodoEditable]= useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todoMsg)
    const buttonRef = useRef(null); // Create a ref for the button


    const editTodo =() =>{
        updateTodo(todo.id,{...todo, todoMsg: todoMsg})
        setIsTodoEditable(false)
    }
    const toggleCompleted = ()=>{
            toggleTodo(todo.id)
    }
    const handleInputChange = (e) => {
        setTodoMsg(e.target.value);
      };
    
      const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          editTodo();
        }
      };
    useEffect(() => {
        // Add a key event listener to the button when it is editable
        if (isTodoEditable) {
          buttonRef.current.addEventListener("keydown", handleKeyPress);
        } else {
          buttonRef.current.removeEventListener("keydown", handleKeyPress);
        }
    
        return () => {
          // Clean up the event listener when the component unmounts
          buttonRef.current.removeEventListener("keydown", handleKeyPress);
        };
      }, [isTodoEditable]);
    
    return(
        <>
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
            ref={buttonRef}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
        </>
    )
}

export default TodoItem;