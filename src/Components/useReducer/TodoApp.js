import React, { useEffect, useReducer } from "react";
import { useForm } from "../Hooks/useForm";

import "./styles.css";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handlerDelete = (todoID) => {
    const action = {
      type: "DELETE",
      payload: todoID,
    };

    dispatch(action);
  };

  const handleToggle = (todoID) => {
    dispatch({
      type: "TOGGLE",
      payload: todoID,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "ADD",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };
  return (
    <div>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li className="list-group-item" key={todo.id}>
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.desc}
                </p>

                <button
                  onClick={() => handlerDelete(todo.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              autoComplete="off"
              placeholder="Learning ..."
              onChange={handleInputChange}
              value={description}
            />

            <button
              type="submit"
              className=" btn btn-outline-primary mt-1 btn-block"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
