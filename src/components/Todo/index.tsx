
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = () => {
    todos.push(todo);
    console.log('todos', todos) // todos array
    setTodos([...todos]);
    setTodo("");
  };

  const emptyTodo = () => {
    setTodos([]);
  };

  return (
    <>
      <center>
        <br />
        <h1>Todo List App</h1>
        <br />
        <input
          placeholder="Input task"
          onChange={(e) => setTodo(e?.target?.value)} // needs to understand
          value={todo}
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
