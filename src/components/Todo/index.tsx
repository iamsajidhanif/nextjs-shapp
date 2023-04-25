
import { useState, useRef } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]); // Declare a state variable...
  const [todo, setTodo] = useState<string>(""); // Declare a state variable...
  const inputRef = useRef<any>(null) // useRef can be used for auto-focus

  const addTodo = () => {
    todos.push(todo);
    // console.log('todos', todos) // todos array
    // console.log('inputRef', inputRef)
    inputRef.current.focus(); // useRef can be used for auto-focus
    // useRef returns value in inputRef.current

    setTodos([...todos]);
    setTodo("");
  };

  const emptyTodo = () => {
    setTodos([]);
    inputRef.current.focus(); // useRef can be used for auto-focus
    // useRef returns value in inputRef.current
  };

  return (
    <>
      <center>
        <br />
        <h2 className="app-color">Todo List App</h2>
        <br />
        <input
          placeholder="Input task"
          value={todo} // ...force the input's value to match the state variable...
          onChange={e => setTodo(e?.target?.value)} // ...and update the state variable on any edits!
          ref={inputRef} // useRef can be used for auto-focus
        />
        &nbsp;&nbsp;
        <button onClick={addTodo}>Add Task</button>&nbsp;&nbsp;
        <button onClick={emptyTodo}>Reset List</button>
        <br />
        <br />
        {todos?.map((val, indx) => {
          return <p key={indx}>{val}</p>;
        })}
      </center>
    </>
  );
};

export default Todo;
